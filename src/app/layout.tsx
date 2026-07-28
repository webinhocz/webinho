import type { Metadata } from "next";
import { Inter, Sora, Geist } from "next/font/google";
import "./globals.css";
import AmbientBackground from "@/components/AmbientBackground";
import ScrollSpine from "@/components/ScrollSpine";
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

export const metadata: Metadata = {
  title: "Webinho | Digitální vizitka vašeho byznisu",
  description:
    "Digitální vizitka vašeho byznysu. Najdou vás, ať hledají váš obor, nebo přímo vás. Nezávazná konzultace zdarma.",
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
        <AmbientBackground />
        <ScrollSpine />
        {children}
      </body>
    </html>
  );
}
