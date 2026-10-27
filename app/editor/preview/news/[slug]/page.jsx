import { notFound } from 'next/navigation';
import Image from '@/components/media/OptimizedImage';
import { readCollection, normalizeNews } from '@/lib/content/reader.mjs';
export const metadata={title:'Draft preview | Talatu',robots:{index:false,follow:false}};
export const dynamic='force-dynamic';
export default async function Preview({params}) {
 if(process.env.NODE_ENV!=='development') notFound();
 const {slug}=await params;
 const found=(await readCollection('news',{includeDrafts:true})).find(item=>item.slug===slug);
 if(!found) notFound();
 let story;
 try {story=normalizeNews(slug,found.entry);} catch {return <main style={{maxWidth:700,margin:'60px auto',padding:24}}><h1>Complete the draft first.</h1><p>Add a title, introduction, image, image description, year and at least one paragraph, then save and preview again.</p></main>}
 return <main style={{maxWidth:900,margin:'40px auto',padding:24}}><p style={{color:'#754043'}}>Saved draft preview · not published</p><h1 style={{fontSize:'clamp(36px,6vw,64px)',lineHeight:1.1,margin:'24px 0'}}>{story.title}</h1><p style={{fontSize:20,lineHeight:1.7}}>{story.excerpt}</p><div style={{position:'relative',height:420,margin:'30px 0'}}><Image src={story.image} alt={story.alt} fill sizes="90vw" style={{objectFit:story.imageFit}} /></div>{story.paragraphs.map((p,i)=><p key={i} style={{fontSize:18,lineHeight:1.8,marginTop:20}}>{p}</p>)}</main>;
}
