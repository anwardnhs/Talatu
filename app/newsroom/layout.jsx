import "./newsroom.css";

export default function NewsroomLayout({ children }) {
  return <main id="main-content" tabIndex={-1} className="newsroom-shell">{children}</main>;
}
