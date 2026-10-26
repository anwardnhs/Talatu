import { ImageResponse } from "next/og";
export const runtime = "edge";
export async function GET() {
  return new ImageResponse(<div style={{ display:"flex", width:"100%", height:"100%", background:"#f5f0e7", color:"#171614", padding:"70px 80px", flexDirection:"column", justifyContent:"space-between" }}><div style={{ display:"flex", fontSize:108, fontWeight:700, letterSpacing:-7 }}>talatu<span style={{ color:"#754043" }}>.</span></div><div style={{ display:"flex", fontSize:60, letterSpacing:-2, maxWidth:950 }}>Stories that move a continent.</div><div style={{ display:"flex", fontSize:25, color:"#754043" }}>A fictional media &amp; entertainment project</div></div>, { width:1200, height:630 });
}
