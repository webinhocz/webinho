"use client";

import { Check, Sparkles } from "lucide-react";
import { useLocale, Rich } from "@/lib/i18n";

export default function Pricing() {
  const { t } = useLocale();

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
          <p className="mt-3 text-sm text-ink-soft">{t.pricing.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {t.pricing.tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-[1.75rem] p-8 transition-transform ${
                tier.highlight
                  ? "glass-strong glow-violet border-violet/40 lg:-translate-y-4"
                  : tier.individual
                    ? "glass-strong border-blue/30 hover:-translate-y-1"
                    : "glass hover:-translate-y-1"
              }`}
            >
              {tier.highlight && (
                <span className="gradient-ink mb-4 inline-block rounded-md px-3 py-1 text-[11px] font-bold tracking-wide text-white">
                  {t.pricing.recommended}
                </span>
              )}
              {tier.individual && (
                <span className="glow-blue mb-4 inline-flex items-center gap-1.5 rounded-md bg-blue-soft px-3 py-1 text-[11px] font-bold tracking-wide text-blue">
                  <Sparkles className="h-3 w-3" strokeWidth={2.5} />
                  {t.pricing.individualBadge}
                </span>
              )}
              <h3 className="font-heading text-lg font-bold text-ink">{tier.name}</h3>
              <p className="mt-1 text-sm text-ink-soft">{tier.desc}</p>
              <div className="mt-5 flex items-baseline gap-1.5">
                <span
                  className={`font-heading text-2xl font-extrabold sm:text-3xl ${
                    tier.highlight ? "text-glow text-gradient-ink" : "text-ink"
                  }`}
                >
                  {tier.priceFrom}
                  {tier.priceTo ? `–${tier.priceTo}` : ""}
                </span>
                <span className="text-sm text-ink-soft">{tier.currency}</span>
              </div>
              <ul className="mt-6 space-y-2.5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink-soft">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        tier.highlight ? "text-violet" : "text-blue"
                      }`}
                      strokeWidth={2.5}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="/navrh-webu"
                className={`mt-8 block rounded-xl px-5 py-3 text-center text-sm font-semibold transition-transform hover:scale-[1.02] ${
                  tier.highlight ? "gradient-ink text-white" : "bg-blue-soft text-blue"
                }`}
              >
                {t.pricing.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-ink-soft">
          <Rich text={t.pricing.note} />
        </p>
      </div>
    </section>
  );
}
