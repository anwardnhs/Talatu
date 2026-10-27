import { getPublishedNews, getPublishedReports, readCollection, normalizeNews, normalizeReport } from '../../lib/content/reader.mjs';
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
for (const name of ['news','reports']) {
 for (const item of await readCollection(name,{includeDrafts:true})) {
  if(!['draft','published'].includes(item.entry.status)) throw Error(`Invalid publication status: ${item.slug}`);
  if(item.entry.status==='published') (name==='news'?normalizeNews:normalizeReport)(item.slug,item.entry);
 }
}
async function checkAssets(directory,kind) {
 let files; try { files=await readdir(directory,{withFileTypes:true}); } catch(e){if(e.code==='ENOENT')return;throw e;}
 for(const file of files) {
  const filename=path.join(directory,file.name);
  if(file.isDirectory()){await checkAssets(filename,kind);continue;}
  const data=await readFile(filename); const size=(await stat(filename)).size;
  if(kind==='pdf') {if(!/\.pdf$/i.test(filename)||data.subarray(0,5).toString()!=='%PDF-'||size>10*1024*1024)throw Error(`Upload must be a PDF under 10 MB: ${filename}`);}
  else {
   const valid=/\.jpe?g$/i.test(filename)?data[0]===255&&data[1]===216:/\.png$/i.test(filename)?data.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])):/\.webp$/i.test(filename)?data.subarray(0,4).toString()==='RIFF'&&data.subarray(8,12).toString()==='WEBP':false;
   if(!valid||size>2*1024*1024)throw Error(`Upload must be a JPG, PNG or WebP under 2 MB: ${filename}`);
  }
 }
}
await checkAssets('public/images/editor','image');await checkAssets('public/reports/editor','pdf');
console.log(`Editor content valid: ${(await getPublishedNews()).length} published news stories, ${(await getPublishedReports()).length} resources. Upload types and size limits verified.`);
