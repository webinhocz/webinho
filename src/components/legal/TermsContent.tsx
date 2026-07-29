"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLocale, Rich } from "@/lib/i18n";

export default function TermsContent() {
  const { t } = useLocale();
  const l = t.legal.terms;

  return (
    <>
      <Nav />
      <main className="flex-1 bg-bg py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <span className="glass inline-block rounded-full px-3 py-1 text-xs font-semibold text-ink-soft">
            {l.badge}
          </span>
          <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {l.title}
          </h1>
          <p className="mt-3 text-sm text-ink-soft">{l.subtitle}</p>

          <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-ink-soft">
            {l.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="font-heading text-lg font-bold text-ink">{s.heading}</h2>
                <p className="mt-2">
                  <Rich text={s.body} />
                </p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
