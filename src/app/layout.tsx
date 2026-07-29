import type { Metadata, Viewport } from "next";
import { Inter, Sora, Geist } from "next/font/google";
import "./globals.css";
import AmbientBackground from "@/components/AmbientBackground";
import ScrollSpine from "@/components/ScrollSpine";
import CookieConsent from "@/components/CookieConsent";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
});

const description =
  "Digitální vizitka vašeho byznysu. Najdou vás, ať hledají váš obor, nebo přímo vás. Nezávazná konzultace zdarma.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.webinho.cz"),
  title: "Webinho | Digitální vizitka vašeho byznysu",
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Webinho | Digitální vizitka vašeho byznysu",
    description,
    url: "https://www.webinho.cz",
    siteName: "Webinho",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webinho | Digitální vizitka vašeho byznysu",
    description,
  },
  verification: {
    other: {
      "seznam-wmt": "LREqvLkNUSxccyYyb6ghAk3jL4Hnmnpt",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#06070b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={cn("dark h-full", inter.variable, sora.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink antialiased">
        <GoogleAnalytics />
        <AmbientBackground />
        <ScrollSpine />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
