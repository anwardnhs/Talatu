import test from 'node:test';
import assert from 'node:assert/strict';
import { getPublishedNews, getPublishedReports, readCollection, safeSitePath, normalizeNews, normalizeReport, selectEntries } from '../lib/content/reader.mjs';
import { allowLocalEditor, editorConfigured } from '../lib/content/access.js';

test('public content can be added or removed without fixed item counts',async()=>{
 const news=await getPublishedNews(),reports=await getPublishedReports();
 assert.ok(Array.isArray(news));assert.ok(Array.isArray(reports));
 for(const item of news) assert.equal(item.status,'published');
 for(const item of reports) assert.equal(item.status,'published');
});
test('drafts and missing statuses are never selected for public delivery',()=>{
 const entries=[{slug:'draft',entry:{status:'draft'}},{slug:'live',entry:{status:'published'}},{slug:'unknown',entry:{}}];
 assert.deepEqual(selectEntries(entries).map(x=>x.slug),['live']);
 assert.equal(selectEntries(entries,true).length,3);
});
test('links cannot use script, offsite, protocol-relative or traversal targets',()=>{
 for(const url of ['javascript:alert(1)','https://evil.test','//evil.test','/images/../secret.png','/images/%2e%2e/secret.png','/images/%5csecret.png','/x\nY'])assert.equal(safeSitePath(url),false,url);
 assert.ok(safeSitePath('/api/investors?dataset=financials&format=csv'));
});
test('news requires image descriptions and complete body content',async()=>{
 const entry={title:'A story',excerpt:'An introduction',alt:'News photo',year:'2026',existingImage:'/images/photo.jpg',paragraphs:['Story body']};
 assert.throws(()=>normalizeNews('test',{...entry,alt:''}));
 assert.throws(()=>normalizeNews('test',{...entry,image:'/images/editor/test.svg'}));
 assert.throws(()=>normalizeNews('test',{...entry,relatedHref:'javascript:alert(1)'}));
});
test('PDF uploads reject unsupported file types and preserve existing links',()=>{
 const base={title:'Test',category:'Results',format:'PDF',status:'published'};
 assert.throws(()=>normalizeReport('test',{...base,file:'/reports/editor/file.html'}));
 assert.equal(normalizeReport('test',{...base,existingHref:'/reports/test.pdf'}).href,'/reports/test.pdf');
 assert.equal(normalizeReport('test',base).href,null);
});
test('production editor fails closed without credentials',()=>{
 assert.equal(editorConfigured(),false);
});
test('local editing rejects remote hosts and cross-site origins',()=>{
 const old=process.env.NODE_ENV;process.env.NODE_ENV='development';
 try {assert.equal(allowLocalEditor(new Request('http://evil.test/api/keystatic/tree')),false);assert.equal(allowLocalEditor(new Request('http://127.0.0.1:3000/api/keystatic/tree',{headers:{origin:'https://evil.test'}})),false);assert.equal(allowLocalEditor(new Request('http://127.0.0.1:3000/api/keystatic/tree')),true);} finally {process.env.NODE_ENV=old;}
});
