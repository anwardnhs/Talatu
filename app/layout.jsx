import { Inter } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/privacy/CookieConsent";
import { WebsiteStructuredData } from "@/components/seo/WebsiteStructuredData";
import { siteUrl } from "@/lib/seo/metadata";
import { site } from "@/data";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Talatu — Fictional Project",
  manifest: "/manifest.webmanifest",
  formatDetection: { telephone: false },
  icons: { icon: "/icon.png", apple: "/icon.png" },
  title: { default: `${site.name} | ${site.tagline}`, template: site.seo.titleTemplate },
  description: `Fictional Talatu project. ${site.description}`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body id="page-top" className="font-sans"><WebsiteStructuredData /><SiteHeader />{children}<SiteFooter /><CookieConsent /></body>
    </html>
  );
}

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#754043" };
