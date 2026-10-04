import Image from "next/image";
import Container from "./Container";
import Reveal from "./Reveal";
import VoucherCard from "./VoucherCard";
import { TextLink } from "./Button";
import { CASE_TEASER } from "@/lib/content";

export default function CaseTeaser() {
  return (
    <section id="vysledky" className="pb-[88px] lg:pb-32">
      <Container>
        <Reveal>
          <div
            className="relative grid overflow-hidden rounded-[var(--radius-media)] lg:grid-cols-[1fr_1.1fr]"
            style={{ background: "linear-gradient(135deg, #020c33 0%, #03134e 45%, #020c33 100%)" }}
          >
            <div className="relative z-10 p-8 sm:p-12 xl:p-16">
              <p className="flex items-center gap-2.5 text-sm font-semibold text-ink-soft">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-blue" />
                {CASE_TEASER.label} · {CASE_TEASER.client}
              </p>
              <h2 className="mt-6 text-balance text-[2.1rem] font-bold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl xl:text-[3.5rem]">
                {CASE_TEASER.title}
              </h2>
              <p className="mt-6 max-w-[50ch] text-[17px] leading-relaxed text-ink-soft">{CASE_TEASER.text}</p>
              <TextLink href="/pripadove-studie/elysee-garden" className="mt-9">
                {CASE_TEASER.cta}
              </TextLink>
            </div>

            <div className="relative min-h-[360px] sm:min-h-[460px]">
              <div className="absolute inset-y-10 left-8 right-0 overflow-hidden rounded-l-[var(--radius-card)] ring-1 ring-line max-lg:left-8 lg:inset-y-14 lg:left-0">
                <Image
                  src="/portfolio/elysee-garden-desktop.jpg"
                  alt="Nový web Élysée Garden"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-left-top"
                />
              </div>
              <VoucherCard className="absolute bottom-6 left-4 max-w-[300px] sm:left-0 lg:bottom-10 lg:-left-10" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
