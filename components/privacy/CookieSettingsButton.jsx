"use client";
export function CookieSettingsButton() {
  return <button type="button" className="legal-cookie-settings" onClick={() => window.dispatchEvent(new Event("talatu:cookie-settings"))}>Manage cookie preferences</button>;
}
