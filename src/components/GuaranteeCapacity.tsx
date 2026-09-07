"use client";

import { ShieldCheck, Users } from "lucide-react";
import { useLocale, Rich } from "@/lib/i18n";

export default function GuaranteeCapacity() {
  const { t } = useLocale();
  const c = t.guaranteeCapacity;

  return (
    <section className="bg-bg py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">
          {c.eyebrow}
        </span>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-[1.75rem] p-8">
            <div className="glow-blue flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-soft text-blue">
              <ShieldCheck className="h-5 w-5" strokeWidth={2} />
            </div>
            <h3 className="mt-5 font-heading text-xl font-bold text-ink">{c.guarantee.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              <Rich text={c.guarantee.text} />
            </p>
            <p className="mt-4 text-xs leading-relaxed text-ink-soft/80">{c.guarantee.note}</p>
          </div>

          <div className="glass rounded-[1.75rem] p-8">
            <div className="glow-blue flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-soft text-blue">
              <Users className="h-5 w-5" strokeWidth={2} />
            </div>
            <h3 className="mt-5 font-heading text-xl font-bold text-ink">{c.capacity.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              <Rich text={c.capacity.text} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
