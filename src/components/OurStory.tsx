"use client";

import { useLocale, Rich } from "@/lib/i18n";

export default function OurStory() {
  const { t } = useLocale();

  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">
              {t.ourStory.eyebrow}
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {t.ourStory.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              <Rich text={t.ourStory.text} />
            </p>
          </div>
          <div className="glass flex aspect-[4/3] items-center justify-center rounded-[1.75rem] text-sm font-medium text-ink-soft">
            {t.ourStory.photoSoon}
          </div>
        </div>
      </div>
    </section>
  );
}
