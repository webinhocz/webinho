import { Clock } from "lucide-react";
import { GrowthBars } from "@/components/ui/statistics-card";

export default function ElyseeResults() {
  return (
    <section className="bg-bg py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">
            Případová studie — Élysée Garden
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Web, který vydělává i ve spánku
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Nový web pro Head Spa studio Élysée Garden nesbírá jen poptávky — přímo na něm si klientky
            můžou koupit i dárkové poukazy.{" "}
            <strong className="font-semibold text-ink">
              Tohle všechno se stalo už během prvního měsíce od spuštění
            </strong>{" "}
            — a web jí poběží dál, dlouhodobě.
          </p>
        </div>

        <div className="mt-16">
          <div className="mb-6 flex justify-center">
            <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-blue">
              <Clock className="h-3.5 w-3.5" strokeWidth={2.5} />
              Prvních 30 dní od spuštění webu
            </span>
          </div>
          <GrowthBars
            items={[
              { value: 11, label: "Poptávek po kadeřnici" },
              { value: 4, label: "Prodaných poukazů" },
              { value: 4.5, displayValue: "4 500 Kč", label: "Tržby z poukazů" },
            ]}
          />
        </div>

        <p className="glass mt-10 max-w-3xl rounded-2xl p-6 text-sm leading-relaxed text-ink-soft">
          Prodej poukazů běží přes web nonstop —{" "}
          <strong className="font-semibold text-ink">
            i ve chvílích, kdy klientku fyzicky neobsluhuje ani s ní netelefonuje
          </strong>
          . Cash flow tak není závislý jen na tom, co se stihne v salonu.
        </p>
      </div>
    </section>
  );
}
