import Link from "next/link";

export default function NewsNotFound() {
  return <section className="news-not-found"><h1>Story not found.</h1><p>This article may have moved or the link may be incorrect.</p><Link href="/newsroom">Back to the newsroom</Link></section>;
}
