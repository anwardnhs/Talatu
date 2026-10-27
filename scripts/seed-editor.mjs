import { newsArticles } from '../data/news-articles.js';
import { investorResources } from '../data/investor-resources.js';
import { writeFileSync, existsSync } from 'node:fs';
for (const [order, a] of newsArticles.entries()) {
 const {slug,title,category,year,excerpt,featured,alt,imageCaption,paragraphs,relatedLink} = a;
 const file=`content/news/${slug}.json`;
 if (!existsSync(file)) writeFileSync(file,JSON.stringify({title,status:'published',category,year,excerpt,featured:!!featured,image:null,existingImage:a.image,alt,imageCaption:imageCaption||'',imageFit:a.imageFit||'cover',paragraphs,relatedHref:relatedLink?.href||'',relatedLabel:relatedLink?.label||'',order},null,2)+'\n');
}
for (const [order,r] of investorResources.entries()) {
 const file=`content/reports/${r.id}.json`;
 if(!existsSync(file)) writeFileSync(file,JSON.stringify({title:r.title,status:'published',category:r.category,format:r.format,detail:r.detail,file:null,existingHref:r.href||'',pages:r.pages||1,period:'FY2025',cover:({'annual-report':'annual','results-presentation':'presentation','financial-summary':'summary'})[r.id]||'none',order},null,2)+'\n');
}
console.log('Existing news and resources copied into editable content. Existing entries were preserved.');
