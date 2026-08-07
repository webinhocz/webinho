import type { Metadata } from "next";
import ProposalPageContent from "@/components/ProposalPageContent";

const title = "Návrh webu zdarma | Webinho";
const description =
  "Vyplňte tři krátké kroky a získejte nezávazný návrh webu na míru vašemu byznysu. Ozveme se do 24–48 hodin, cenu řešíme až potom.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/navrh-webu",
  },
  openGraph: {
    title,
    description,
    url: "https://www.webinho.cz/navrh-webu",
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

export default function NavrhWebu() {
  return <ProposalPageContent />;
}
