import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

export function safeSitePath(value) {
  if (typeof value !== 'string' || !value.startsWith('/') || value.startsWith('//') || /[\\\u0000-\u0020]/.test(value)) return false;
  try { const decoded=decodeURIComponent(value.split(/[?#]/)[0]); if(decoded.split('/').some(segment=>segment==='..'||segment==='.'||segment.includes('\\'))) return false; const url=new URL(value,'https://talatu.invalid'); return url.origin==='https://talatu.invalid' && !decodeURIComponent(url.pathname).split('/').some(segment=>segment==='..'||segment==='.'||segment.includes('\\')); } catch { return false; }
}
function asset(value, directory, extensions) {
  // Supplied image names include spaces, which browsers encode when requesting them.
  if(typeof value!=='string') return false;
  const encoded=value.replaceAll(' ','%20');
  return safeSitePath(encoded) && encoded.startsWith(directory) && !encoded.includes('?') && !encoded.includes('#') && extensions.test(encoded);
}
export function normalizeNews(slug, entry) {
  if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw Error('Invalid news URL name.');
  const image=entry.image || entry.existingImage;
  if(!entry.title?.trim() || !entry.excerpt?.trim() || !entry.alt?.trim() || !/^20\d{2}$/.test(entry.year) || !asset(image,'/images/',/\.(?:png|jpe?g|webp)$/i) || !Array.isArray(entry.paragraphs) || !entry.paragraphs.length || entry.paragraphs.some(p=>typeof p!=='string'||!p.trim())) throw Error(`News story "${slug}" needs a title, introduction, year, image, image description and story paragraphs.`);
  if(entry.relatedHref && !safeSitePath(entry.relatedHref)) throw Error(`News story "${slug}" has an unsafe related link.`);
  return { ...entry, slug, image, featured:!!entry.featured, imageFit:entry.imageFit==='contain'?'contain':'cover', relatedLink:entry.relatedHref&&entry.relatedLabel?{href:entry.relatedHref,label:entry.relatedLabel}:null };
}
export function normalizeReport(id, entry) {
  const href=entry.file || entry.existingHref || null;
  if(!entry.title?.trim() || !['Results','Shareholding','Governance'].includes(entry.category) || !['PDF','CSV','Web page'].includes(entry.format) || (href&&!safeSitePath(href))) throw Error(`Report "${id}" contains missing or invalid details.`);
  if(entry.file && !asset(entry.file,'/reports/editor/',/\.pdf$/i)) throw Error(`Report "${id}" must use a PDF upload.`);
  return { ...entry,id,href,download:entry.format!=='Web page',pages:entry.pages||1,period:entry.period||'FY2025' };
}
export function selectEntries(records, includeDrafts=false) {
  return records.filter(({entry})=>includeDrafts || entry.status==='published').sort((a,b)=>(a.entry.order??10)-(b.entry.order??10));
}
export async function readCollection(directory, { includeDrafts=false }={}) {
  const root=path.join(process.cwd(),'content',directory);
  const files=(await readdir(root)).filter(name=>name.endsWith('.json')).sort();
  const all=await Promise.all(files.map(async name=>({slug:name.slice(0,-5),entry:JSON.parse(await readFile(path.join(root,name),'utf8'))})));
  return selectEntries(all,includeDrafts);
}
export async function getPublishedNews() {
  return (await readCollection('news')).map(({slug,entry})=>normalizeNews(slug,entry)).sort((a,b)=>Number(b.year)-Number(a.year)||(a.order??10)-(b.order??10));
}
export async function getPublishedReports() {
  return (await readCollection('reports')).map(({slug,entry})=>normalizeReport(slug,entry));
}
