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
          <div className="glass aspect-[4/3] overflow-hidden rounded-[1.75rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/team/nas-pribeh.jpg"
              alt={t.ourStory.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
