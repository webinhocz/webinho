"use client";

import { ImageComparison } from "@/components/ui/image-comparison-slider";
import { useLocale, Rich } from "@/lib/i18n";

export default function BeforeAfter() {
  const { t } = useLocale();

  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">
            {t.beforeAfter.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {t.beforeAfter.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            <Rich text={t.beforeAfter.text} />
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <ImageComparison
            beforeImage="/portfolio/obora-janovska-dolina-pred.png"
            afterImage="/portfolio/obora-vino-po.png"
            altBefore={t.beforeAfter.altBefore}
            altAfter={t.beforeAfter.altAfter}
            beforeLabel={t.beforeAfter.before}
            afterLabel={t.beforeAfter.after}
          />
        </div>
        <p className="mt-4 text-center text-xs text-ink-soft">{t.beforeAfter.hint}</p>
      </div>
    </section>
  );
}
