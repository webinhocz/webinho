import type { Metadata } from "next";
import PrivacyContent from "@/components/legal/PrivacyContent";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů | Webinho",
};

export default function OchranaOsobnichUdaju() {
  return <PrivacyContent />;
}
