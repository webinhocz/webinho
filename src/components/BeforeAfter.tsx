import { ImageComparison } from "@/components/ui/image-comparison-slider";

export default function BeforeAfter() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">
            Případová studie — Obora Víno
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            První dojem rozhoduje
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Pan Malucha měl zastaralý web, který{" "}
            <strong className="font-semibold text-ink">nesbíral žádné poptávky</strong>. Dnes má web,
            který <strong className="font-semibold text-ink">dělá skvělý první dojem</strong> — a už
            sesbíral svoji první poptávku.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <ImageComparison
            beforeImage="/portfolio/obora-janovska-dolina-pred.png"
            afterImage="/portfolio/obora-vino-po.png"
            altBefore="Původní web Obora Janovská Dolina"
            altAfter="Nový web Obora Víno od webinho"
            beforeLabel="Před"
            afterLabel="Po"
          />
        </div>
        <p className="mt-4 text-center text-xs text-ink-soft">
          Přetáhněte posuvník a porovnejte.
        </p>
      </div>
    </section>
  );
}
