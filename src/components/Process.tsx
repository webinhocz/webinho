"use client";

import { ChevronDown, Handshake, MessageSquareText, PenTool, Rocket } from "lucide-react";
import { useLocale, Rich } from "@/lib/i18n";

const ICONS = [MessageSquareText, PenTool, Handshake, Rocket];

export default function Process() {
  const { t } = useLocale();
  const steps = t.process.steps;

  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">
            {t.process.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {t.process.title}
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-xl">
          {steps.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <div key={s.title} className={`relative flex gap-6 ${i < steps.length - 1 ? "pb-10" : ""}`}>
                {i < steps.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-px bg-gradient-to-b from-blue to-violet" />
                )}
                <div className="glow-blue z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-soft text-blue">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <div className="pt-1.5">
                  <h3 className="font-heading text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    <Rich text={s.text} />
                  </p>
                </div>
              </div>
            );
          })}
          <div className="flex w-12 justify-center text-violet">
            <ChevronDown className="h-5 w-5" strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </section>
  );
}
