import { MessageSquareText, PenTool, Rocket } from "lucide-react";

const STEPS = [
  {
    icon: MessageSquareText,
    title: "Nezávazná poptávka",
    text: "Napíšete nám o svém byznysu. Ozveme se s orientační cenou.",
  },
  {
    icon: PenTool,
    title: "Návrh na míru",
    text: "Připravíme design a strukturu podle vašeho oboru.",
  },
  {
    icon: Rocket,
    title: "Spuštění a poptávky",
    text: "Web nasadíme online. Od prvního dne vás reprezentuje a sbírá poptávky.",
  },
];

export default function Process() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">Jak to probíhá</span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Od poptávky k hotovému webu
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.title}>
              <div className="glow-blue flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-soft text-blue">
                <s.icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
