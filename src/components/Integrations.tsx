"use client";

import { BarChart3, CreditCard, MailCheck, Target } from "lucide-react";
import { useLocale, Rich } from "@/lib/i18n";

const ICONS = [BarChart3, Target, CreditCard, MailCheck];

export default function Integrations() {
  const { t } = useLocale();

  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">
            {t.integrations.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {t.integrations.title}
          </h2>
          <p className="mt-3 text-base text-ink-soft">{t.integrations.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.integrations.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={item.title}
                className="glass rounded-[1.75rem] p-7 transition-transform hover:-translate-y-1"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-soft text-blue">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-5 font-heading text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  <Rich text={item.text} />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
