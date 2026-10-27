import { makeRouteHandler } from '@keystatic/next/route-handler';
import config from '../../../../keystatic.config';
import { allowLocalEditor, editorConfigured } from '@/lib/content/access';
export const runtime='nodejs';
export const dynamic='force-dynamic';
let handlers;
async function handle(request,context) {
  if(!editorConfigured()) return Response.json({error:'Online editor is not configured.'},{status:503,headers:{'Cache-Control':'no-store'}});
  if(!allowLocalEditor(request)) return Response.json({error:'Local editor requests must come from this machine.'},{status:403,headers:{'Cache-Control':'no-store'}});
  handlers ||= makeRouteHandler({ config });
  const handler=handlers[request.method];
  if(!handler) return new Response(null,{status:405});
  const response=await handler(request,context);
  response.headers.set('Cache-Control','no-store');
  response.headers.set('X-Robots-Tag','noindex, nofollow');
  return response;
}
export const GET=handle;
export const POST=handle;
