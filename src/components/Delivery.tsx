"use client";

import Link from "next/link";
import { useLocale, Rich } from "@/lib/i18n";

export default function Delivery() {
  const { t } = useLocale();
  const d = t.delivery;

  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">
            {d.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {d.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">{d.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {d.tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-[1.75rem] p-7 transition-transform hover:-translate-y-1 ${
                tier.badge ? "glass-strong border-violet/40" : "glass"
              }`}
            >
              {tier.badge && (
                <span className="gradient-ink mb-4 inline-block rounded-md px-3 py-1 text-[11px] font-bold tracking-wide text-white">
                  {tier.badge}
                </span>
              )}
              <h3 className="font-heading text-lg font-bold text-ink">{tier.name}</h3>
              <p className="mt-1 text-sm font-semibold text-blue">{tier.days}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{tier.desc}</p>
              <p
                className={`mt-6 font-heading text-xl font-extrabold ${
                  tier.badge ? "text-gradient-ink" : "text-ink"
                }`}
              >
                {tier.price}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="/navrh-webu"
            className="gradient-ink inline-flex rounded-xl px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_-12px_rgba(91,110,245,0.6)] transition-transform hover:scale-[1.03]"
          >
            {d.cta}
          </a>
          <Link
            href="/web-do-24-hodin"
            className="text-sm font-semibold text-ink-soft underline decoration-line underline-offset-4 transition-colors hover:text-ink"
          >
            {d.linkText}
          </Link>
        </div>

        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-ink-soft">
          <Rich text={d.note} />
        </p>
      </div>
    </section>
  );
}
