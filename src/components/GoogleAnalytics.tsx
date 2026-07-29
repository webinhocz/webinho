"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const CONSENT_KEY = "webinho_cookie_consent";

/**
 * Only loads gtag once the visitor has accepted analytics cookies via
 * CookieConsent — and once NEXT_PUBLIC_GA_ID is set.
 */
export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(window.localStorage.getItem(CONSENT_KEY) === "all");

    const onConsent = (e: Event) => {
      setAllowed((e as CustomEvent<string>).detail === "all");
    };
    window.addEventListener("webinho:cookie-consent", onConsent);
    return () => window.removeEventListener("webinho:cookie-consent", onConsent);
  }, []);

  if (!gaId || !allowed) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
