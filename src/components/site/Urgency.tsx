import Container from "./Container";
import Reveal from "./Reveal";
import { PrimaryButton } from "./Button";
import { URGENCY } from "@/lib/content";

export default function Urgency() {
  return (
    <section className="pb-[88px] lg:pb-32">
      <Container>
        <Reveal>
          <div className="grid gap-12 border-y border-line py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:py-24">
            <div>
              <p className="flex items-center gap-2.5 text-sm font-semibold text-ink-soft">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-blue" />
                {URGENCY.label}
              </p>
              <h2 className="mt-5 text-balance text-[2.25rem] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl xl:text-[4rem]">
                {URGENCY.title}
              </h2>
              <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-ink-soft lg:text-lg">{URGENCY.lead}</p>
              <PrimaryButton href="/kontakt" className="mt-9">
                {URGENCY.cta}
              </PrimaryButton>
            </div>
            <ul className="grid content-center gap-8">
              {URGENCY.points.map((p) => (
                <li key={p.title} className="border-l-2 border-line pl-6 transition-colors hover:border-blue">
                  <h3 className="text-lg font-bold text-ink lg:text-xl">{p.title}</h3>
                  <p className="mt-2 max-w-[48ch] text-[16px] leading-relaxed text-ink-soft">{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
