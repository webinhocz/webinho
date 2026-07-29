"use client";

import { Globe, Search, Send } from "lucide-react";
import { useLocale, Rich } from "@/lib/i18n";

const ICONS = [Globe, Search, Send];
const TONES = ["gradient-ink glow-blue text-white", "glass text-ink", "glass text-ink"];

export default function ValueProps() {
  const { t } = useLocale();

  return (
    <section id="o-nas" className="bg-bg py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">
            {t.valueProps.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {t.valueProps.title}
          </h2>
          <p className="mt-3 text-base text-ink-soft">{t.valueProps.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {t.valueProps.items.map((item, i) => {
            const Icon = ICONS[i];
            const tone = TONES[i];
            return (
              <div
                key={item.title}
                className={`rounded-[1.75rem] p-7 transition-transform hover:-translate-y-1 ${tone}`}
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                    tone.includes("glass") ? "bg-blue-soft text-blue" : "bg-white/15 text-white"
                  }`}
                >
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold">{item.title}</h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    tone.includes("glass") ? "text-ink-soft" : "text-white/85"
                  }`}
                >
                  <Rich text={item.text} className={tone.includes("glass") ? undefined : "font-semibold"} />
                </p>
              </div>
            );
          })}
        </div>

        <p className="glass mt-8 max-w-3xl rounded-2xl p-6 text-sm leading-relaxed text-ink-soft">
          <Rich text={t.valueProps.note} />
        </p>
      </div>
    </section>
  );
}
