"use client";
import Link from "next/link";

export default function ErrorPage({ reset }) {
  return (
    <main id="main-content" tabIndex={-1} className="error-page-shell">
      <section className="site-error" role="alert">
        <p>Something went wrong</p>
        <h1>Let’s try that again.</h1>
        <p>
          The page couldn’t finish loading. Try again, or return to the
          homepage.
        </p>
        <div>
          <button type="button" onClick={reset}>
            Try again
          </button>
          <Link href="/">Go to homepage</Link>
        </div>
      </section>
    </main>
  );
}
