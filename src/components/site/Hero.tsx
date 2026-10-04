import Image from "next/image";
import Container from "./Container";
import { PrimaryButton, TextLink } from "./Button";
import { CONTACT, HERO } from "@/lib/content";

const SHOTS = [
  { src: "/portfolio/obora-vino-po.png", alt: "Web Obora Víno", pos: "object-top" },
  { src: "/portfolio/naobchodku.jpg", alt: "Web Obchodní akademie Opava", pos: "object-top" },
  { src: "/portfolio/elysee-garden-desktop.jpg", alt: "Web Élysée Garden", pos: "object-left-top" },
];

function BrowserFrame({ src, alt, pos, className, preload }: { src: string; alt: string; pos: string; className?: string; preload?: boolean }) {
  return (
    <div className={`overflow-hidden rounded-[var(--radius-card)] bg-surface shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)] ring-1 ring-line ${className ?? ""}`}>
      <div className="flex h-7 items-center gap-1.5 bg-ink/[0.04] px-3">
        <span className="h-2 w-2 rounded-full bg-ink/20" />
        <span className="h-2 w-2 rounded-full bg-ink/20" />
        <span className="h-2 w-2 rounded-full bg-ink/20" />
      </div>
      <div className="relative aspect-[16/10]">
        <Image src={src} alt={alt} fill preload={preload} sizes="(min-width: 1024px) 40vw, 90vw" className={`object-cover ${pos}`} />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[120px] pb-16 lg:pt-[140px] lg:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 78% 30%, rgba(3,19,78,0.9) 0%, rgba(2,12,51,0.55) 40%, rgba(1,1,1,0) 75%)",
        }}
      />
      <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <h1 className="text-balance text-[2.6rem] font-bold leading-[1.04] tracking-[-0.035em] text-ink sm:text-6xl xl:text-[5rem]">
            {HERO.title}
          </h1>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-ink-soft lg:text-xl">{HERO.lead}</p>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
            <PrimaryButton href="/#kontakt" className="h-14 px-8 text-base">
              {HERO.cta}
            </PrimaryButton>
            <TextLink href="/pripadove-studie/elysee-garden">{HERO.secondary}</TextLink>
          </div>
          <p className="mt-8 text-sm font-medium text-ink-faint">{HERO.trust}</p>
          <div className="mt-5 flex items-center gap-4">
            <div className="relative shrink-0">
              <Image src={CONTACT.photo} alt="" width={48} height={48} className="h-12 w-12 rounded-full object-cover object-[50%_25%] ring-1 ring-line" />
              <span aria-hidden className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-blue ring-2 ring-bg" />
            </div>
            <div className="text-[15px] leading-snug">
              <p className="font-semibold text-ink">{HERO.capacityTitle}</p>
              <p className="text-ink-soft">{HERO.capacityText}</p>
            </div>
          </div>
        </div>

        <div aria-hidden className="relative mx-auto hidden w-full max-w-[760px] sm:block lg:mx-0">
          <div className="absolute -inset-10 -z-10 rounded-full bg-blue/20 blur-[90px]" />
          <BrowserFrame {...SHOTS[0]} preload className="relative z-10 w-[82%]" />
          <BrowserFrame {...SHOTS[1]} className="absolute right-0 top-[18%] z-0 w-[60%] opacity-90" />
          <BrowserFrame {...SHOTS[2]} className="relative z-20 -mt-[18%] ml-[30%] w-[62%]" />
        </div>
      </Container>
    </section>
  );
}
