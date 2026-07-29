"use client";

import { ScrollReelTestimonials } from "@/components/ui/scroll-reel-testimonials";
import { useLocale } from "@/lib/i18n";

export default function Testimonials() {
  const { t } = useLocale();

  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">
            {t.testimonials.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {t.testimonials.title}
          </h2>
          <p className="mt-3 text-sm text-ink-soft">{t.testimonials.subtitle}</p>
        </div>

        <div className="mt-10 flex justify-center">
          <ScrollReelTestimonials testimonials={t.testimonials.reviews} />
        </div>
      </div>
    </section>
  );
}
