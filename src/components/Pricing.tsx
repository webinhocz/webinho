import { Check } from "lucide-react";

const TIERS = [
  {
    name: "Start",
    priceFrom: "10",
    priceTo: "15",
    desc: "Jednoduchá digitální vizitka pro živnostníky.",
    features: ["One-page web na míru", "Poptávkový formulář", "Základní SEO"],
    highlight: false,
  },
  {
    name: "Business",
    priceFrom: "15",
    priceTo: "25",
    desc: "Vícestránkový web pro malé a střední firmy.",
    features: [
      "Až 5 podstránek",
      "Poptávkový formulář",
      "SEO nastavení",
      "Kompletně custom design",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    priceFrom: "25",
    priceTo: "40",
    desc: "Rozsáhlejší web na míru bez limitu sekcí.",
    features: [
      "Web bez limitu sekcí",
      "Vše navrženo a postaveno na míru",
      "Pokročilé SEO",
      "Prioritní zpracování",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="cenik" className="bg-bg py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">Ceník</span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Balíčky podle rozsahu
          </h2>
          <p className="mt-3 text-sm text-ink-soft">
            Každý web je jiný, proto je i cena vždy individuální. Tady jsou orientační rozpětí.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-[1.75rem] p-8 transition-transform ${
                t.highlight
                  ? "glass-strong glow-violet border-violet/40 lg:-translate-y-4"
                  : "glass hover:-translate-y-1"
              }`}
            >
              {t.highlight && (
                <span className="gradient-ink mb-4 inline-block rounded-md px-3 py-1 text-[11px] font-bold tracking-wide text-white">
                  DOPORUČENO
                </span>
              )}
              <h3 className="font-heading text-lg font-bold text-ink">{t.name}</h3>
              <p className="mt-1 text-sm text-ink-soft">{t.desc}</p>
              <div className="mt-5 flex items-baseline gap-1.5">
                <span
                  className={`font-heading text-2xl font-extrabold sm:text-3xl ${
                    t.highlight ? "text-glow text-gradient-ink" : "text-ink"
                  }`}
                >
                  {t.priceFrom}–{t.priceTo} 000
                </span>
                <span className="text-sm text-ink-soft">Kč</span>
              </div>
              <ul className="mt-6 space-y-2.5">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink-soft">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${t.highlight ? "text-violet" : "text-blue"}`}
                      strokeWidth={2.5}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className={`mt-8 block rounded-xl px-5 py-3 text-center text-sm font-semibold transition-transform hover:scale-[1.02] ${
                  t.highlight ? "gradient-ink text-white" : "bg-blue-soft text-blue"
                }`}
              >
                Mám zájem
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-ink-soft">
          Ceny jsou orientační. <strong className="font-semibold text-ink">Přesnou nabídku vždy šijeme na
          míru</strong> podle rozsahu a potřeb vašeho byznysu. Primárně tvoříme nové weby jako digitální
          vizitku s poptávkovým formulářem. Redesign i e-shop dokážeme zrealizovat, řešíme je
          individuálně podle poptávky.
        </p>
      </div>
    </section>
  );
}
