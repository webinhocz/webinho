"use client";

import { Clock } from "lucide-react";
import { GrowthBars } from "@/components/ui/statistics-card";
import { useLocale, Rich } from "@/lib/i18n";

export default function ElyseeResults() {
  const { t } = useLocale();

  return (
    <section className="bg-bg py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">
            {t.elyseeResults.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {t.elyseeResults.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            <Rich text={t.elyseeResults.text} />
          </p>
        </div>

        <div className="mt-16">
          <div className="mb-6 flex justify-center">
            <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-blue">
              <Clock className="h-3.5 w-3.5" strokeWidth={2.5} />
              {t.elyseeResults.badge}
            </span>
          </div>
          <GrowthBars items={t.elyseeResults.stats} />
        </div>

        <p className="glass mt-10 max-w-3xl rounded-2xl p-6 text-sm leading-relaxed text-ink-soft">
          <Rich text={t.elyseeResults.note} />
        </p>
      </div>
    </section>
  );
}
