import { ChevronDown, Handshake, MessageSquareText, PenTool, Rocket } from "lucide-react";

const STEPS = [
  {
    icon: MessageSquareText,
    title: "Nezávazná poptávka",
    text: (
      <>Napíšete nám pár slov o svém byznysu a jak si nový web představujete.</>
    ),
  },
  {
    icon: PenTool,
    title: "Návrh na míru",
    text: (
      <>
        Připravíme orientační návrh designu a struktury podle vašeho oboru —{" "}
        <strong className="font-semibold text-ink">zatím bez řešení ceny</strong>.
      </>
    ),
  },
  {
    icon: Handshake,
    title: "Odsouhlasení ceny",
    text: (
      <>
        Podle rozsahu návrhu si spolu <strong className="font-semibold text-ink">odsouhlasíme finální
        cenu</strong> a jdeme do toho.
      </>
    ),
  },
  {
    icon: Rocket,
    title: "Spuštění a poptávky",
    text: (
      <>
        Web dokončíme a nasadíme online.{" "}
        <strong className="font-semibold text-ink">Od prvního dne vás reprezentuje a sbírá
        poptávky.</strong>
      </>
    ),
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

        <div className="mx-auto mt-14 max-w-xl">
          {STEPS.map((s, i) => (
            <div key={s.title} className={`relative flex gap-6 ${i < STEPS.length - 1 ? "pb-10" : ""}`}>
              {i < STEPS.length - 1 && (
                <div className="absolute left-6 top-12 bottom-0 w-px bg-gradient-to-b from-blue to-violet" />
              )}
              <div className="glow-blue z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-soft text-blue">
                <s.icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <div className="pt-1.5">
                <h3 className="font-heading text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
              </div>
            </div>
          ))}
          <div className="flex w-12 justify-center text-violet">
            <ChevronDown className="h-5 w-5" strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </section>
  );
}
