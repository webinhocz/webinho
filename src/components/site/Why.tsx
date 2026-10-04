import Container from "./Container";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { WHY } from "@/lib/content";

export default function Why() {
  return (
    <section className="section">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <SectionHeader label={WHY.label} title={WHY.title} lead={WHY.lead} />
            <p className="mt-8 max-w-[46ch] border-l-2 border-blue pl-5 text-[16px] font-medium leading-relaxed text-ink">
              {WHY.proof}
            </p>
          </Reveal>
        </div>
        <div>
          {WHY.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04}>
              <div className={`grid grid-cols-[3rem_1fr] gap-x-4 ${i === 0 ? "pb-8 lg:pb-9" : "border-t border-line py-8 lg:py-9"}`}>
                <span className="pt-1 text-sm font-semibold tabular-nums text-blue">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-xl font-bold tracking-[-0.01em] text-ink lg:text-2xl">{item.title}</h3>
                  <p className="mt-3 max-w-[56ch] text-[16px] leading-relaxed text-ink-soft lg:text-[17px]">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
