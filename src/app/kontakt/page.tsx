import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Mail, Phone } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import Container from "@/components/site/Container";
import ContactForm from "@/components/site/ContactForm";
import { CONTACT, CONTACT_PAGE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kontakt | Webinho",
  description:
    "Napište, zavolejte nebo vyplňte krátký formulář. Lukáš Přibyla z Webinho se vám ozve do 24 hodin.",
  alternates: { canonical: "/kontakt" },
};

const CHANNELS = [
  { Icon: Mail, label: CONTACT_PAGE.emailLabel, value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { Icon: Phone, label: CONTACT_PAGE.phoneLabel, value: CONTACT.phone, href: CONTACT.phoneHref },
];

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="relative flex-1 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: "radial-gradient(50% 45% at 20% 25%, rgba(3,19,78,0.85) 0%, rgba(1,1,1,0) 70%)" }}
        />
        <Container className="grid gap-14 pt-[120px] pb-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:pt-[150px] lg:pb-32">
          <div>
            <p className="flex items-center gap-2.5 text-sm font-semibold text-ink-soft">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-blue" />
              {CONTACT_PAGE.label}
            </p>
            <h1 className="mt-6 text-balance text-[2.5rem] font-bold leading-[1.05] tracking-[-0.035em] text-ink sm:text-6xl xl:text-[4.5rem]">
              {CONTACT_PAGE.title}
            </h1>
            <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-ink-soft">{CONTACT_PAGE.lead}</p>

            <div className="mt-12 grid gap-3">
              {CHANNELS.map(({ Icon, label, value, href }) => (
                <a
                  key={href}
                  href={href}
                  className="group flex items-center gap-5 rounded-[var(--radius-card)] bg-ink/[0.035] p-5 ring-1 ring-transparent transition-colors hover:ring-line sm:p-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue text-ink">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span>
                    <span className="block text-sm text-ink-soft">{label}</span>
                    <span className="mt-0.5 block text-lg font-bold text-ink sm:text-xl">{value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-5">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full ring-1 ring-line">
                <Image src={CONTACT.photo} alt={CONTACT.person} fill sizes="96px" className="object-cover object-[50%_25%]" />
              </div>
              <div>
                <p className="text-lg font-bold text-ink">{CONTACT.person}</p>
                <p className="mt-1 flex items-center gap-2 text-[15px] text-ink-soft">
                  <Clock className="h-4 w-4 text-blue" strokeWidth={2} />
                  {CONTACT_PAGE.hours}
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold text-ink-soft">{CONTACT_PAGE.formLabel}</p>
            <div className="rounded-[var(--radius-media)] bg-bg-alt/80 p-6 ring-1 ring-line backdrop-blur sm:p-10 xl:p-12">
              <ContactForm />
            </div>
            <p className="mt-6 text-sm text-ink-faint">{CONTACT_PAGE.company}</p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
