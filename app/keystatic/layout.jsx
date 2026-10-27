import KeystaticApp from './keystatic';
import { editorConfigured } from '@/lib/content/access';
import Link from 'next/link';
export const metadata={ title:{absolute:'Content editor | Talatu'},robots:{index:false,follow:false},alternates:{canonical:'/editor'} };
export const dynamic='force-dynamic';
export default function Layout() {
  if(!editorConfigured()) return <main className="editor-setup"><h1>Connect the content editor.</h1><p>Online editing needs its GitHub connection. The editor remains locked until that setup is complete.</p><Link href="/editor">View setup instructions</Link></main>;
  return <KeystaticApp />;
}
