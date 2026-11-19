"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { CONSENT_KEY, META_PIXEL_ID, trackContact } from "@/lib/tracking";

// CookieConsent saves the choice to localStorage, then fires this event
function subscribe(onChange: () => void) {
  window.addEventListener("webinho:cookie-consent", onChange);
  return () => window.removeEventListener("webinho:cookie-consent", onChange);
}

function hasConsent() {
  try {
    return window.localStorage.getItem(CONSENT_KEY) === "all";
  } catch {
    return false;
  }
}

/**
 * Loads the Meta Pixel only after the visitor accepted all cookies in
 * CookieConsent (GDPR). The base code tracks the first PageView; later
 * client-side navigations are tracked here.
 */
export default function MetaPixel() {
  const pathname = usePathname();
  const allowed = useSyncExternalStore(subscribe, hasConsent, () => false);
  const trackedPath = useRef<string | null>(null);

  // phone and e-mail links sit in many components, so one listener reports them all
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const href = (e.target as Element | null)?.closest?.("a[href^='tel:'], a[href^='mailto:']")?.getAttribute("href");
      if (href) trackContact(href.startsWith("tel:") ? "telefon" : "email");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // the script cannot be unloaded once it ran, so tell it to stop or resume
  useEffect(() => {
    window.fbq?.("consent", allowed ? "grant" : "revoke");
  }, [allowed]);

  useEffect(() => {
    if (!allowed) return;
    if (trackedPath.current === null) {
      // the base code below already sent the PageView for this page
      trackedPath.current = pathname;
      return;
    }
    if (trackedPath.current !== pathname) {
      trackedPath.current = pathname;
      window.fbq?.("track", "PageView");
    }
  }, [allowed, pathname]);

  if (!allowed) return null;

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
        document,'script','https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${META_PIXEL_ID}');
        fbq('track', 'PageView');
      `}
    </Script>
  );
}
