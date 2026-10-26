import Link from "next/link";

export default function CompanyNotFound() {
  return <div className="company-not-found"><h1>Company not found.</h1><Link href="/businesses">Back to our companies</Link></div>;
}
