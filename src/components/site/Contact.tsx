import Image from "next/image";
import Container from "./Container";
import SectionHeader from "./SectionHeader";
import ContactForm from "./ContactForm";
import { CONTACT, CONTACT_SECTION } from "@/lib/content";

export default function Contact() {
  return (
    <section id="kontakt" className="section relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "radial-gradient(50% 60% at 15% 70%, rgba(3,19,78,0.7) 0%, rgba(1,1,1,0) 70%)" }}
      />
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeader label={CONTACT_SECTION.label} title={CONTACT_SECTION.title} lead={CONTACT_SECTION.lead} />

          <div className="mt-12">
            <p className="text-sm font-semibold text-ink">{CONTACT_SECTION.stepsTitle}</p>
            <ol className="mt-5 grid gap-4">
              {CONTACT_SECTION.steps.map((s, i) => (
                <li key={s} className="flex items-baseline gap-4 text-[16px] text-ink-soft">
                  <span className="text-sm font-semibold tabular-nums text-blue">{String(i + 1).padStart(2, "0")}</span>
                  {s}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-1 ring-line">
              <Image src={CONTACT.photo} alt={CONTACT.person} fill sizes="80px" className="object-cover object-[50%_25%]" />
            </div>
            <div className="text-[15px]">
              <p className="font-semibold text-ink">{CONTACT.person}</p>
              <p className="mt-0.5 text-ink-soft">{CONTACT_SECTION.direct}</p>
              <div className="mt-1.5 flex flex-wrap gap-x-5 gap-y-1">
                <a href={`mailto:${CONTACT.email}`} className="font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink">
                  {CONTACT.email}
                </a>
                <a href={CONTACT.phoneHref} className="font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink">
                  {CONTACT.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[var(--radius-media)] bg-bg-alt/80 p-6 ring-1 ring-line backdrop-blur sm:p-10 xl:p-12">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
