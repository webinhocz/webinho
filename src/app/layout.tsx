import type { Metadata, Viewport } from "next";
import { Inter, Sora, Geist } from "next/font/google";
import "./globals.css";
import AmbientBackground from "@/components/AmbientBackground";
import ScrollSpine from "@/components/ScrollSpine";
import CookieConsent from "@/components/CookieConsent";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { LocaleProvider } from "@/lib/i18n";
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
  "Kompletní firemní web na míru za 29 990 Kč. Sbírá poptávky, buduje důvěru a prodává i mimo otevírací dobu. Hotovo do 7 dní, RUSH realizace do 24 hodin.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.webinho.cz"),
  title: "Webinho | Kompletní firemní web na míru",
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Webinho | Kompletní firemní web na míru",
    description,
    url: "https://www.webinho.cz",
    siteName: "Webinho",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webinho | Kompletní firemní web na míru",
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
        <LocaleProvider>
          <GoogleAnalytics />
          <AmbientBackground />
          <ScrollSpine />
          {children}
          <CookieConsent />
        </LocaleProvider>
      </body>
    </html>
  );
}
