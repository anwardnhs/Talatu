"use client";
import { usePathname } from 'next/navigation';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { CookieConsent } from '@/components/privacy/CookieConsent';
export function SiteChrome({children}) {
  const pathname=usePathname();
  if(pathname.startsWith('/keystatic') || pathname==='/editor') return children;
  return <><SiteHeader />{children}<SiteFooter /><CookieConsent /></>;
}
