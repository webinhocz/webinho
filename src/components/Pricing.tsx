"use client";

import { Check } from "lucide-react";
import { useLocale, Rich } from "@/lib/i18n";

export default function Pricing() {
  const { t } = useLocale();
  const { offer } = t.pricing;

  return (
    <section id="cenik" className="bg-bg py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">
            {t.pricing.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {t.pricing.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-ink-soft">{t.pricing.subtitle}</p>
        </div>

        <div className="glass-strong glow-violet border-violet/40 mt-14 rounded-[1.75rem] p-8 sm:p-10 lg:p-12">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <h3 className="font-heading text-xl font-bold text-ink sm:text-2xl">{offer.name}</h3>
              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="text-glow text-gradient-ink font-heading text-4xl font-extrabold sm:text-5xl">
                  {offer.price}
                </span>
                <span className="text-base text-ink-soft">{offer.currency}</span>
              </div>
            </div>
            <a
              href="/navrh-webu"
              className="gradient-ink block w-full shrink-0 rounded-xl px-7 py-3.5 text-center text-sm font-semibold text-white shadow-[0_16px_40px_-12px_rgba(91,110,245,0.6)] transition-transform hover:scale-[1.03] sm:w-auto"
            >
              {offer.cta}
            </a>
          </div>

          <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {offer.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-ink-soft">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet" strokeWidth={2.5} />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:gap-4">
            {offer.paymentSplit.map((step, i) => (
              <div key={step} className="glass flex flex-1 items-center gap-3 rounded-xl px-4 py-3">
                <span className="gradient-ink flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm font-semibold text-ink">{step}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-ink-soft">
          <Rich text={t.pricing.note} />
        </p>
      </div>
    </section>
  );
}
