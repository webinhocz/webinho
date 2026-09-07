"use client";

import Link from "next/link";
import { Check, ShieldCheck } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { FAQSection } from "@/components/ui/faq-section-shadcnui";

const RUSH_TIERS = [
  {
    name: "RUSH 48",
    days: "do 48 hodin",
    price: "+7 000 Kč",
    badge: "Prioritní realizace",
    desc: "Kompletní firemní web hotový a online do 48 hodin od potvrzení kompletních podkladů. Jdete mimo pořadí, kvalita zůstává stejná.",
  },
  {
    name: "RUSH 24",
    days: "do 24 hodin",
    price: "+10 000 Kč",
    badge: "Nejvyšší priorita",
    desc: "Kompletní firemní web hotový a online do 24 hodin od potvrzení kompletních podkladů. Pro launch, který nemůže čekat.",
  },
];

const FAQS = [
  {
    question: "Je web do 24 hodin stejně kvalitní jako standardní realizace?",
    answer:
      "Ano. RUSH realizace mění jen rychlost, ne rozsah ani kvalitu — dostanete stejný kompletní firemní web jako při standardní realizaci do 7 dní.",
  },
  {
    question: "Co potřebujete ode mě, abyste stihli web do 24 hodin?",
    answer:
      "Kompletní podklady předem — logo, texty nebo alespoň jasné zadání, fotky a přístupy k doméně/DNS. Bez nich rychlost negarantujeme.",
  },
  {
    question: "Platí garance termínu i pro RUSH realizaci?",
    answer:
      "Ano, garance termínu platí i pro RUSH 48 a RUSH 24 stejně jako pro standardní realizaci do 7 dní.",
  },
  {
    question: "Kolik expresní tvorba webu stojí navíc?",
    answer:
      "RUSH 48 je +7 000 Kč, RUSH 24 je +10 000 Kč k ceně kompletního firemního webu na míru 29 990 Kč.",
  },
];

export default function RushLandingContent() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <HeroGeometric
          badge="RUSH realizace"
          title1="Web do 24 hodin"
          title2="bez kompromisů v kvalitě."
          subtitle="Expresní tvorba webu pro firmy, které nemůžou čekat dva týdny. Kompletní firemní web, spuštěný do 24 nebo 48 hodin od potvrzení podkladů."
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/navrh-webu"
              className="gradient-ink rounded-xl px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_-12px_rgba(91,110,245,0.6)] transition-transform hover:scale-[1.03]"
            >
              Chci nezávazný návrh →
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium text-ink-soft">
            {["Web do 24 nebo 48 hodin", "Garance termínu platí i pro RUSH", "Bez kompromisů v kvalitě"].map(
              (c) => (
                <span key={c} className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-blue" strokeWidth={2.5} />
                  {c}
                </span>
              )
            )}
          </div>
        </HeroGeometric>

        <section className="bg-bg py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">
              Kdy se expresní web hodí
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Ne každá firma má na web čtrnáct dní
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              Expresní tvorbu webu využívají firmy, které spouští kampaň už tento týden, otevírají
              novou pobočku, potřebují narychlo nahradit web, který spadl, nebo mají akci, na kterou
              web musí stihnout dorazit včas. Přesně pro tyhle situace jsme postavili RUSH realizaci
              — rychlou tvorbu webových stránek, která nejede na úkor kvality. Dostanete stejný
              kompletní firemní web jako při standardní realizaci, jen ho spustíme podstatně dřív.
            </p>
          </div>
        </section>

        <section className="bg-surface py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">
                Rychlost realizace
              </span>
              <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                RUSH 48, nebo RUSH 24
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {RUSH_TIERS.map((tier) => (
                <div key={tier.name} className="glass-strong border-violet/40 rounded-[1.75rem] p-7">
                  <span className="gradient-ink mb-4 inline-block rounded-md px-3 py-1 text-[11px] font-bold tracking-wide text-white">
                    {tier.badge}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-ink">{tier.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-blue">{tier.days}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{tier.desc}</p>
                  <p className="text-gradient-ink mt-6 font-heading text-xl font-extrabold">
                    {tier.price}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 max-w-2xl text-xs leading-relaxed text-ink-soft">
              Ceny jsou příplatkem k ceně kompletního firemního webu na míru 29 990 Kč. RUSH
              realizace vyžaduje kompletní podklady předem — logo, texty, fotky, přístupy.
            </p>
          </div>
        </section>

        <section className="bg-bg py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="glass rounded-[1.75rem] p-8">
              <div className="glow-blue flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-soft text-blue">
                <ShieldCheck className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold text-ink">
                Garance termínu platí i pro RUSH
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Pokud web nespustíme v potvrzeném termínu z důvodu na naší straně — byť o jediný den
                — dostanete slevu 5 000 Kč. Za každý další započatý týden zpoždění dalších 5 000 Kč.
                Garance se nevztahuje na zpoždění způsobené klientem, např. nedodanými podklady.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-surface py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <FAQSection
              eyebrow="Časté otázky"
              heading="Co byste ještě chtěli vědět"
              subheading="Odpovědi na nejčastější otázky k expresní tvorbě webu."
              faqs={FAQS.map((f) => ({ question: f.question, answer: f.answer }))}
            />
          </div>
        </section>

        <section className="bg-bg py-24">
          <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">
              Nezávazná poptávka
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Potřebujete web fakt narychlo?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink-soft">
              Napište nám, co potřebujete a do kdy. Řekneme rovnou, jestli RUSH 48 nebo RUSH 24 dává
              smysl.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <a
                href="/navrh-webu"
                className="gradient-ink inline-flex rounded-xl px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_-12px_rgba(91,110,245,0.6)] transition-transform hover:scale-[1.03]"
              >
                Chci nezávazný návrh →
              </a>
              <Link
                href="/#portfolio"
                className="text-sm font-semibold text-ink-soft underline decoration-line underline-offset-4 transition-colors hover:text-ink"
              >
                Chci se nejdřív podívat na vaše práce ↓
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
