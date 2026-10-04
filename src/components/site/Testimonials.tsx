import Image from "next/image";
import Container from "./Container";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { TESTIMONIALS } from "@/lib/content";
import { cn } from "@/lib/utils";

type Item = (typeof TESTIMONIALS.items)[number];

export function TestimonialCard({ t, className }: { t: Item; className?: string }) {
  return (
    <figure
      className={cn(
        "grid gap-6 rounded-[var(--radius-card)] bg-ink/[0.035] p-6 sm:grid-cols-[220px_1fr] sm:items-center sm:gap-10 sm:p-8 lg:p-10",
        className
      )}
    >
      <figcaption className="flex items-center gap-4 sm:order-first">
        {t.photo ? (
          <Image src={t.photo} alt={t.author} width={56} height={56} className="h-14 w-14 shrink-0 rounded-full object-cover ring-1 ring-line" />
        ) : (
          <span aria-hidden className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-deep text-lg font-bold text-ink">
            {t.author.split(" ").map((w) => w[0]).join("")}
          </span>
        )}
        <div>
          <a href={t.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink underline decoration-line underline-offset-4 hover:decoration-ink">
            {t.author}
          </a>
          <p className="mt-1 text-sm leading-snug text-ink-soft">{t.role}</p>
        </div>
      </figcaption>
      <blockquote className="order-first max-w-[75ch] text-[17px] leading-relaxed text-ink sm:order-none">„{t.quote}“</blockquote>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section className="section bg-bg-alt">
      <Container>
        <Reveal>
          <SectionHeader label={TESTIMONIALS.label} title={TESTIMONIALS.title} />
        </Reveal>
        <div className="mt-12 grid gap-4 lg:mt-16">
          {TESTIMONIALS.items.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.06}>
              <TestimonialCard t={t} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
