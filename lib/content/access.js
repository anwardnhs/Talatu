export function editorConfigured() {
  return process.env.NODE_ENV==='development' || Boolean(process.env.KEYSTATIC_GITHUB_CLIENT_ID && process.env.KEYSTATIC_GITHUB_CLIENT_SECRET && process.env.KEYSTATIC_SECRET && process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG);
}
export function allowLocalEditor(request) {
  if(process.env.NODE_ENV!=='development') return true;
  const url=new URL(request.url);
  if(!['localhost','127.0.0.1','[::1]'].includes(url.hostname)) return false;
  const origin=request.headers.get('origin');
  if(origin) {
    try { const source=new URL(origin); if(!['localhost','127.0.0.1','[::1]'].includes(source.hostname) || source.port!==url.port || source.protocol!==url.protocol) return false; } catch { return false; }
  }
  return request.headers.get('sec-fetch-site')!=='cross-site';
}
