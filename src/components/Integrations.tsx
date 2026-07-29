import { BarChart3, CreditCard, MailCheck, Target } from "lucide-react";

const ITEMS = [
  {
    icon: BarChart3,
    title: "Google Analytics 4 & Google Tag",
    text: "Napojíme GA4 a Google Tag Manager, abyste přesně věděli, odkud lidé přichází a co na webu dělají.",
    bold: "GA4 a Google Tag Manager",
  },
  {
    icon: Target,
    title: "Meta Pixel",
    text: "Nastavíme Meta Pixel pro sledování konverzí a cílení reklamy na Facebooku a Instagramu.",
    bold: "Meta Pixel",
  },
  {
    icon: CreditCard,
    title: "Platební brány",
    text: "Napojíme platební bránu podle potřeby — od jednorázových plateb po e-shopové řešení.",
    bold: "platební bránu",
  },
  {
    icon: MailCheck,
    title: "Automatizované e-maily",
    text: "Poptávky a objednávky z webu vám i klientům automaticky pošleme e-mailem, bez ruční práce.",
    bold: "automaticky",
  },
];

export default function Integrations() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">
            Co umíme napojit navíc
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Nejen hezký web
          </h2>
          <p className="mt-3 text-base text-ink-soft">
            Weby stavíme tak, aby přinášely data i výsledky, ne jen dobrý dojem.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="glass rounded-[1.75rem] p-7 transition-transform hover:-translate-y-1"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-soft text-blue">
                <item.icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-heading text-base font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {item.text.split(item.bold).map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && <strong className="font-semibold text-ink">{item.bold}</strong>}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
