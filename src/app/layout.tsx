import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { LocaleProvider } from "@/lib/i18n";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const description =
  "Tvorba webů, landing page a redesignů pro firmy z Moravskoslezského kraje i odjinud. Web, který přivádí poptávky a prodává i mimo otevírací dobu. Hotovo obvykle do dvou týdnů.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.webinho.cz"),
  title: "Webinho | Weby, které firmám přivádějí zakázky",
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Webinho | Weby, které firmám přivádějí zakázky",
    description,
    url: "https://www.webinho.cz",
    siteName: "Webinho",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webinho | Weby, které firmám přivádějí zakázky",
    description,
  },
  verification: {
    google: "-ezOckEaCfPbtmjXTeTmtwDj-Bk_HxZSNeIAlZXDrgg",
    other: {
      // older token kept so the existing Seznam verification keeps working
      "seznam-wmt": ["VpkuLHgqfFK0KcdKBfXfZ0cQR6cc5rpO", "LREqvLkNUSxccyYyb6ghAk3jL4Hnmnpt"],
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Webinho",
  legalName: "Lukáš Přibyla",
  url: "https://www.webinho.cz",
  logo: "https://www.webinho.cz/brand/webinho-logo-white.png",
  image: "https://www.webinho.cz/opengraph-image",
  description,
  email: "pribyla@webinho.cz",
  telephone: "+420602557015",
  founder: { "@type": "Person", name: "Lukáš Přibyla" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hrnčířská 124/9",
    addressLocality: "Opava",
    postalCode: "746 01",
    addressCountry: "CZ",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Moravskoslezský kraj" },
    { "@type": "Country", name: "Česká republika" },
  ],
  sameAs: ["https://www.facebook.com/webinho.cz", "https://www.instagram.com/webinho.cz"],
  knowsAbout: ["Tvorba webových stránek", "Landing page", "Redesign webu", "SEO", "Platební brány", "Automatizace"],
};

export const viewport: Viewport = {
  themeColor: "#010101",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`h-full ${manrope.variable}`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LocaleProvider>
          <GoogleAnalytics />
          {children}
          <CookieConsent />
        </LocaleProvider>
      </body>
    </html>
  );
}
