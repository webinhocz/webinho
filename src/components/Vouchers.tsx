"use client";

import { CreditCard, Gift, MousePointerClick } from "lucide-react";
import { useLocale, Rich } from "@/lib/i18n";

const ICONS = [MousePointerClick, CreditCard, Gift];

export default function Vouchers() {
  const { t } = useLocale();
  const v = t.vouchers;

  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">
              {v.eyebrow}
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {v.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">{v.subtitle}</p>

            <p className="glass mt-8 rounded-2xl p-5 text-sm leading-relaxed text-ink-soft">
              <Rich text={v.proof} />{" "}
              <a href="#elysee" className="font-semibold text-blue hover:underline">
                {v.proofLink}
              </a>
            </p>
          </div>

          <div className="glass rounded-[1.75rem] p-8">
            {v.steps.map((step, i) => {
              const Icon = ICONS[i];
              return (
                <div key={step} className={`relative flex gap-5 ${i < v.steps.length - 1 ? "pb-8" : ""}`}>
                  {i < v.steps.length - 1 && (
                    <div className="absolute left-5 top-11 bottom-0 w-px bg-gradient-to-b from-blue to-violet" />
                  )}
                  <div className="glow-blue z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-soft text-blue">
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </div>
                  <p className="pt-2 text-sm font-semibold text-ink">{step}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
