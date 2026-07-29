import type { Metadata } from "next";
import TermsContent from "@/components/legal/TermsContent";

export const metadata: Metadata = {
  title: "Obchodní podmínky | Webinho",
};

export default function ObchodniPodminky() {
  return <TermsContent />;
}
