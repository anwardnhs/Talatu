export function FormErrors({ errors, prefix }) {
  if (!Object.keys(errors).length) return null;
  return <div className="form-errors" role="alert"><h3>A few details need checking.</h3><ul>{Object.entries(errors).map(([name, message]) => <li key={name}><a href={`#${prefix}-${name}`} onClick={(event) => { event.preventDefault(); document.getElementById(`${prefix}-${name}`)?.focus(); }}>{message}</a></li>)}</ul></div>;
}
