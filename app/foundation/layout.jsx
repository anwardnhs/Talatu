import "./foundation.css";

export default function FoundationLayout({ children }) {
  return <main id="main-content" tabIndex={-1} className="foundation-shell">{children}</main>;
}
