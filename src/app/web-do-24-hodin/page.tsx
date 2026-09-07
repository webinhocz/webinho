import type { Metadata } from "next";
import RushLandingContent from "@/components/RushLandingContent";

const title = "Web do 24 hodin | RUSH realizace — Webinho";
const description =
  "Expresní tvorba webu do 24 nebo 48 hodin od potvrzení podkladů. Kompletní firemní web bez kompromisů v kvalitě, s garancí termínu.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/web-do-24-hodin",
  },
  openGraph: {
    title,
    description,
    url: "https://www.webinho.cz/web-do-24-hodin",
    siteName: "Webinho",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function WebDo24Hodin() {
  return <RushLandingContent />;
}
