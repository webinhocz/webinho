"use client";

import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { useLocale, Rich } from "@/lib/i18n";

export default function TermsContent() {
  const { t } = useLocale();
  const l = t.legal.terms;

  return (
    <>
      <Nav />
      <main className="flex-1 bg-bg py-32">
        <div className="container-site max-w-4xl">
          <span className="inline-block text-sm font-semibold text-ink-soft">
            {l.badge}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {l.title}
          </h1>
          <p className="mt-3 text-sm text-ink-soft">{l.subtitle}</p>

          <div className="mt-10 flex flex-col gap-8 text-[15px] leading-relaxed text-ink-soft">
            {l.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="text-lg font-bold text-ink">{s.heading}</h2>
                {s.body.split("\n").map((para, i) => (
                  <p key={i} className="mt-2">
                    <Rich text={para} />
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
