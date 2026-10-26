import "./businesses.css";

export default function BusinessesLayout({ children }) {
  return <main id="main-content" tabIndex={-1} className="companies-shell">{children}</main>;
}
