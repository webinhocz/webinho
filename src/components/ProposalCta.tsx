"use client";

import { Globe, MessageSquareText, Mail } from "lucide-react";
import { useLocale, Rich } from "@/lib/i18n";

const STEP_ICONS = [Globe, MessageSquareText, Mail];

export default function ProposalCta() {
  const { t } = useLocale();
  const c = t.proposalCta;
  const steps = t.contactForm.steps;

  return (
    <section id="kontakt" className="bg-bg py-24">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">
          {c.eyebrow}
        </span>
        <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          {c.title}
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink-soft">
          <Rich text={c.subtitle} />
        </p>

        <div className="glass mt-10 flex items-center justify-center gap-3 rounded-full px-5 py-3 sm:gap-4">
          {steps.map((label, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <div key={label} className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-soft sm:text-sm">
                  <Icon className="h-4 w-4 text-blue" strokeWidth={2} />
                  {label}
                </span>
                {i < steps.length - 1 && <div className="h-px w-4 bg-line sm:w-8" />}
              </div>
            );
          })}
        </div>

        <a
          href="/navrh-webu"
          className="gradient-ink mt-8 inline-flex rounded-xl px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_-12px_rgba(91,110,245,0.6)] transition-transform hover:scale-[1.03]"
        >
          {c.cta}
        </a>
      </div>
    </section>
  );
}
