import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import Contact from "@/components/site/Contact";
import Container from "@/components/site/Container";
import Reveal from "@/components/site/Reveal";
import VoucherCard from "@/components/site/VoucherCard";
import { PrimaryButton } from "@/components/site/Button";
import { TestimonialCard } from "@/components/site/Testimonials";
import { TESTIMONIALS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Případová studie Élysée Garden | Webinho",
  description:
    "Jak Head Spa studio Élysée Garden v Opavě prodalo za 3 měsíce dárkové poukazy za více než 40 000 Kč. Online, automaticky a i ve chvílích, kdy má zavřeno.",
  alternates: { canonical: "/pripadove-studie/elysee-garden" },
};

const FACTS = [
  { value: "40 000+ Kč", label: "z dárkových poukazů za první 3 měsíce" },
  { value: "22:00 i později", label: "kdy lidé poukazy často kupují" },
  { value: "0 minut", label: "ruční práce s vystavením poukazu" },
];

const FLOW = [
  { title: "Zaplatí online", text: "Zákazník na webu vybere rituál a zaplatí kartou přes platební bránu Stripe, kterou jsme studiu pomohli založit." },
  { title: "Dostane hotový poukaz", text: "Do e-mailu mu hned přijde poukaz s evidenčním číslem a hodnotou. V příloze je vyplněné PDF k vytisknutí, stačí dopsat jméno obdarovaného." },
  { title: "Studio má přehled", text: "Zároveň přijde e-mail zaměstnancům studia. Vedou si evidenci a hned poznají, jestli je předložený poukaz pravý." },
];

const WHO = ["Kadeřnictví a kosmetika", "Masáže a wellness", "Head Spa a beauty studia", "Restaurace a kavárny", "Zážitky a kurzy", "Fitness a trenéři"];

const review = TESTIMONIALS.items[0];

function Block({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <Reveal className="grid gap-6 border-t border-line pt-10 lg:grid-cols-[1fr_2fr] lg:gap-16 lg:pt-14">
      <div>
        <p className="text-sm font-semibold text-blue">{label}</p>
        <h2 className="mt-3 text-balance text-2xl font-bold leading-tight tracking-[-0.02em] text-ink lg:text-[2rem]">{title}</h2>
      </div>
      <div className="max-w-[64ch] space-y-5 text-[17px] leading-relaxed text-ink-soft lg:text-lg">{children}</div>
    </Reveal>
  );
}

export default function ElyseeCaseStudy() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="relative overflow-hidden pt-[120px] lg:pt-[150px]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{ background: "radial-gradient(55% 50% at 70% 20%, rgba(3,19,78,0.85) 0%, rgba(2,12,51,0.4) 45%, rgba(1,1,1,0) 75%)" }}
          />
          <Container>
            <p className="flex items-center gap-2.5 text-sm font-semibold text-ink-soft">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-blue" />
              Případová studie · Élysée Garden, Opava
            </p>
            <h1 className="mt-6 max-w-[18ch] text-balance text-[2.5rem] font-bold leading-[1.05] tracking-[-0.035em] text-ink sm:text-6xl xl:text-[4.75rem]">
              Poukazy, které se prodávají, i když má studio zavřeno.
            </h1>
            <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-ink-soft lg:text-xl">
              Head Spa studio paní Stavařové dostalo nový web a online dárkové poukazy. Za první tři měsíce přes ně prodalo za více než 40 000 Kč.
            </p>

            <dl className="mt-14 grid gap-8 border-t border-line pt-10 sm:grid-cols-3">
              {FACTS.map((f) => (
                <div key={f.label}>
                  <dt className="sr-only">{f.label}</dt>
                  <dd>
                    <span className="block text-3xl font-bold tracking-[-0.02em] text-ink lg:text-[2.5rem]">{f.value}</span>
                    <span className="mt-2 block text-[15px] text-ink-soft">{f.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        <section className="pt-14 lg:pt-20">
          <Container>
            <Reveal className="relative">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius-media)] ring-1 ring-line sm:aspect-[2.08/1]">
                <Image
                  src="/portfolio/elysee-garden-desktop.jpg"
                  alt="Nový web Élysée Garden Studio"
                  fill
                  preload
                  sizes="(min-width: 1720px) 1600px, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <a
                href="https://elyseegarden.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-medium text-ink-soft hover:text-ink"
              >
                elyseegarden.cz <ArrowUpRight className="h-4 w-4" />
              </a>
            </Reveal>
          </Container>
        </section>

        <section className="section">
          <Container className="space-y-16 lg:space-y-24">
            <Block label="Výchozí stav" title="Základní web, který jen stál.">
              <p>
                Studio mělo jednoduchý web se základními animacemi a rezervacemi přes systém Noona. Fungoval jako vizitka, ale nic navíc nepřinášel a nevypadal tak prémiově jako samotné studio.
              </p>
            </Block>

            <Block label="Co jsme změnili" title="Nový design a web, který najdou lidé z okolí.">
              <p>
                Rezervace přes Noonu jsme zachovali, na ty jsou klientky zvyklé. Všechno ostatní jsme navrhli znovu: design, který odpovídá atmosféře studia, jasně popsané rituály s cenami a texty, které vysvětlí, proč Head Spa vůbec zkusit.
              </p>
              <p>
                Web jsme připravili tak, aby ho našli hlavně lidé v Opavě a okolí, kteří hledají péči o vlasy, Head Spa nebo dárek pro blízké.
              </p>
            </Block>

            <Block label="To hlavní" title="Dárkové poukazy online, bez ruční práce.">
              <p>
                Pro paní Stavařovou bylo nejdůležitější ušetřit čas. Poukazy proto neřeší po telefonu ani v e-mailech. Lidé je kupují přímo na webu a celý proces od platby po hotové PDF běží automaticky.
              </p>
              <p>
                Je to ideální dárek na poslední chvíli. Večer koupíte, vytisknete a ráno předáte manželce, dceři nebo kamarádce.
              </p>
              <ol className="grid gap-6 pt-2 sm:grid-cols-3">
                {FLOW.map((s, i) => (
                  <li key={s.title}>
                    <span className="text-sm font-semibold tabular-nums text-blue">{String(i + 1).padStart(2, "0")}</span>
                    <p className="mt-2 font-semibold text-ink">{s.title}</p>
                    <p className="mt-2 text-[16px]">{s.text}</p>
                  </li>
                ))}
              </ol>
            </Block>

            <Reveal className="relative isolate grid items-center gap-10 overflow-hidden rounded-[var(--radius-media)] p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr] lg:p-16">
              <div
                aria-hidden
                className="absolute inset-0 -z-10"
                style={{ background: "linear-gradient(135deg, #020c33 0%, #03134e 50%, #020c33 100%)" }}
              />
              <div>
                <p className="text-sm font-semibold text-ink-soft">Výsledek</p>
                <p className="mt-4 text-balance text-3xl font-bold leading-tight tracking-[-0.025em] text-ink sm:text-4xl lg:text-5xl">
                  Přes 40 000 Kč za 3 měsíce. Často v deset, jedenáct nebo dvanáct večer.
                </p>
                <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-ink-soft">
                  Upozornění na každý prodej chodí i nám. Vidíme, že lidé kupují poukazy pozdě večer, kdy má studio dávno zavřeno a všichni spí. Studio tak získává peníze předem, ještě než klient přijde na rituál.
                </p>
              </div>
              <VoucherCard className="mx-auto lg:mx-0 lg:justify-self-end" />
            </Reveal>

            <Block label="Pro koho to dává smysl" title="Prodáváte službu, kterou jde darovat?">
              <p>
                Pak pro vás funguje stejný princip. Poukaz si lidé koupí, když na dárek myslí, typicky večer na gauči. Pokud ho v tu chvíli nejde koupit online, odejdou jinam.
              </p>
              <ul className="flex flex-wrap gap-2.5 pt-1">
                {WHO.map((w) => (
                  <li key={w} className="rounded-full bg-ink/[0.05] px-4 py-2 text-[15px] text-ink ring-1 ring-line">
                    {w}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <PrimaryButton href="#kontakt">Chci poukazy online</PrimaryButton>
              </div>
            </Block>

            <Block label="Spolupráce dál" title="Spuštěním webu to nekončí.">
              <p>
                S paní Stavařovou spolupracujeme dál. Když potřebuje něco změnit, třeba novou nabídku nebo kampaň, napíše a my to upravíme. Kampaňovou landing page jsme jí připravili za dva pracovní dny.
              </p>
            </Block>

            <Reveal className="grid gap-6 border-t border-line pt-10 lg:grid-cols-[1fr_2fr] lg:gap-16 lg:pt-14">
              <div>
                <p className="text-sm font-semibold text-blue">Recenze</p>
                <h2 className="mt-3 text-balance text-2xl font-bold leading-tight tracking-[-0.02em] text-ink lg:text-[2rem]">Co říká majitelka</h2>
              </div>
              <TestimonialCard t={review} className="max-w-3xl" />
            </Reveal>
          </Container>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
