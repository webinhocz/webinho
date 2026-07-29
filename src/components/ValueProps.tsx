import { Globe, Search, Send } from "lucide-react";

const ITEMS = [
  {
    icon: Globe,
    title: "Web šitý na míru",
    text: (
      <>
        Ne šablona, ne obyčejná vizitka. <strong className="font-semibold">Postavíme vám web na míru</strong>{" "}
        s fotkami, službami i atmosférou vašeho podnikání.
      </>
    ),
    tone: "gradient-ink glow-blue text-white",
  },
  {
    icon: Search,
    title: "Najdou váš web na Googlu i Seznamu",
    text: (
      <>
        Když někdo hledá váš obor nebo přímo vaši firmu, potřebujete se tam objevit.{" "}
        <strong className="font-semibold text-ink">Bez webu jde zákazník ke konkurenci.</strong>
      </>
    ),
    tone: "glass text-ink",
  },
  {
    icon: Send,
    title: "Web, který pracuje za vás",
    text: (
      <>
        Nejen reprezentuje. Díky poptávkovému formuláři vám přivádí{" "}
        <strong className="font-semibold text-ink">nové klienty 24 hodin denně</strong>.
      </>
    ),
    tone: "glass text-ink",
  },
];

export default function ValueProps() {
  return (
    <section id="o-nas" className="bg-bg py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">
            Proč webinho
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Obyčejná vizitka dnes nestačí.
          </h2>
          <p className="mt-3 text-base text-ink-soft">
            Tvoříme moderní webové stránky, které vás reprezentují a přivádí nové zákazníky.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className={`rounded-[1.75rem] p-7 transition-transform hover:-translate-y-1 ${item.tone}`}
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                  item.tone.includes("glass") ? "bg-blue-soft text-blue" : "bg-white/15 text-white"
                }`}
              >
                <item.icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold">{item.title}</h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  item.tone.includes("glass") ? "text-ink-soft" : "text-white/85"
                }`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <p className="glass mt-8 max-w-3xl rounded-2xl p-6 text-sm leading-relaxed text-ink-soft">
          Ať web zatím nemáte, nebo je zastaralý.{" "}
          <span className="font-semibold text-ink">
            Špatný první dojem odradí zákazníka i od velké firmy se silným kapitálem.
          </span>{" "}
          Setkali jsme se s oběma případy a víme, jak to změnit.
        </p>
      </div>
    </section>
  );
}
