"use client";

import { ImageComparison } from "@/components/ui/image-comparison-slider";
import { BadImpressionIcon, NoInquiryIcon, UnclearOfferIcon } from "@/components/ui/cost-icons";
import { useLocale } from "@/lib/i18n";

const ICONS = [BadImpressionIcon, NoInquiryIcon, UnclearOfferIcon];

export default function CostOfInaction() {
  const { t } = useLocale();
  const c = t.costOfInaction;

  return (
    <section className="bg-bg py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">
            {c.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {c.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.subtitle}</p>
        </div>

        <div className="glass mt-10 divide-y divide-line rounded-[1.75rem] px-7">
          {c.points.map((point, i) => {
            const Icon = ICONS[i];
            return (
              <div key={point.title} className="flex items-start gap-4 py-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-coral/15 text-coral">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-ink">{point.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{point.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">
            {c.caseEyebrow}
          </span>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">{c.caseText}</p>

          <div className="mt-8 flex justify-center">
            <ImageComparison
              beforeImage="/portfolio/obora-janovska-dolina-pred.png"
              afterImage="/portfolio/obora-vino-po.png"
              altBefore={c.altBefore}
              altAfter={c.altAfter}
              beforeLabel={c.before}
              afterLabel={c.after}
            />
          </div>
          <p className="mt-4 text-center text-xs text-ink-soft">{c.hint}</p>
        </div>
      </div>
    </section>
  );
}
