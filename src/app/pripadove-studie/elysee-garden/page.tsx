import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import Container from "@/components/site/Container";
import Reveal from "@/components/site/Reveal";
import VoucherCard from "@/components/site/VoucherCard";
import LeadForm from "@/components/site/LeadForm";
import { PrimaryButton, TextLink } from "@/components/site/Button";
import { TestimonialCard } from "@/components/site/Testimonials";
import { CONTACT, TESTIMONIALS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Případová studie Élysée Garden: 40 000 Kč z poukazů | Webinho",
  description:
    "Head Spa studio v Opavě prodalo přes web za 3 měsíce dárkové poukazy za více než 40 000 Kč. Majitelku to stálo hodinu času, zbytek jsme zařídili my a prodej běží dál.",
  alternates: { canonical: "/pripadove-studie/elysee-garden" },
};

const LEAD_TOPIC = "Online poukazy (případová studie)";

const FACTS = [
  { value: "40 000+ Kč", label: "z poukazů za první 3 měsíce" },
  { value: "1 hodina", label: "času majitelky za celý projekt" },
  { value: "0 minut", label: "práce s každým prodaným poukazem" },
  { value: "Nonstop", label: "prodává, i když má studio zavřeno" },
];

const FLOW = [
  { title: "Vybere a zaplatí", text: "Zákazník si na webu vybere rituál a rovnou ho zaplatí kartou." },
  { title: "Hned má hotový poukaz", text: "Do e-mailu mu přijde poukaz připravený k vytisknutí. Stačí dopsat jméno obdarovaného." },
  { title: "Studio má přehled", text: "Studio dostane upozornění o prodeji. Když klient poukaz přinese, hned pozná, že je pravý." },
];

const OUR_WORK = [
  "Návrh webu v duchu studia",
  "Texty, které vysvětlí, proč Head Spa zkusit",
  "Rituály s cenami a rezervace, na které jsou klientky zvyklé",
  "Pomoc se založením platební brány",
  "Automatické vystavení poukazu s evidenčním číslem",
  "Poukaz v PDF připravený k tisku",
  "E-maily zákazníkovi i studiu po každém nákupu",
  "Evidence poukazů a kontrola pravosti",
  "Nastavení, aby web našli lidé z Opavy a okolí",
  "Úpravy po spuštění, třeba landing page pro kampaň za 2 pracovní dny",
];

const WHO = ["Kadeřnictví a kosmetika", "Masáže a wellness", "Head Spa a beauty studia", "Restaurace a kavárny", "Zážitky a kurzy", "Fitness a trenéři"];

const NEXT_STEPS = [
  "Do 24 hodin vám zavolám.",
  "Zeptám se, co prodáváte a jak to u vás dnes funguje.",
  "Řeknu vám na rovinu, jestli a jak by to šlo i u vás.",
];

const review = TESTIMONIALS.items[0];

function Block({ id, label, title, children }: { id?: string; label: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id}>
      <Reveal className="grid gap-6 border-t border-line pt-10 lg:grid-cols-[1fr_2fr] lg:gap-16 lg:pt-14">
        <div>
          <p className="text-sm font-semibold text-blue">{label}</p>
          <h2 className="mt-3 text-balance text-2xl font-bold leading-tight tracking-[-0.02em] text-ink lg:text-[2rem]">{title}</h2>
        </div>
        <div className="max-w-[64ch] space-y-5 text-[17px] leading-relaxed text-ink-soft lg:text-lg">{children}</div>
      </Reveal>
    </div>
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
            <h1 className="mt-6 max-w-[20ch] text-balance text-[2.5rem] font-bold leading-[1.05] tracking-[-0.035em] text-ink sm:text-6xl xl:text-[4.75rem]">
              Přes 40 000 Kč z poukazů. Majitelku to stálo hodinu času.
            </h1>
            <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-ink-soft lg:text-xl">
              Head Spa studio paní Stavařové prodává dárkové poukazy přímo na webu, i v noci, kdy má zavřeno. Všechnu práci kolem jsme udělali my a prodej od spuštění běží sám.
            </p>
            <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
              <PrimaryButton href="#ozvu-se" className="h-14 px-7 text-base">
                Chci to i u sebe
              </PrimaryButton>
              <TextLink href="#jak-to-funguje">Jak to funguje</TextLink>
            </div>

            <dl className="mt-14 grid gap-8 border-t border-line pt-10 sm:grid-cols-2 xl:grid-cols-4">
              {FACTS.map((f) => (
                <div key={f.label}>
                  <dt className="sr-only">{f.label}</dt>
                  <dd>
                    <span className="block whitespace-nowrap text-3xl font-bold tracking-[-0.02em] text-ink lg:text-[2.5rem]">{f.value}</span>
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
            <Block label="Výchozí stav" title="Web jako vizitka. Sám nic neprodával.">
              <p>
                Studio mělo jednoduchý web s rezervacemi přes systém Noona. Fungoval jako vizitka, ale nic navíc nepřinášel a nevypadal tak prémiově jako samotné studio.
              </p>
              <p>
                Paní Stavařová chtěla hlavně jedno: prodávat dárkové poukazy, aniž by kvůli tomu musela sedět u telefonu nebo u e-mailu.
              </p>
            </Block>

            <Block id="jak-to-funguje" label="Jak to funguje" title="Zákazník si poukaz koupí sám. Studio nemusí nic dělat.">
              <p>
                Celý nákup od platby po hotový poukaz běží automaticky. Je to ideální dárek na poslední chvíli: večer koupíte, vytisknete a ráno předáte.
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

            <div className="space-y-8 border-t border-line pt-10 lg:space-y-10 lg:pt-14">
              <Reveal className="max-w-4xl">
                <p className="text-sm font-semibold text-blue">Kolik práce to majitelku stálo</p>
                <h2 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-[-0.025em] text-ink lg:text-5xl">
                  Ona strávila hodinu. Všechno ostatní jsme udělali my.
                </h2>
              </Reveal>

              <Reveal className="grid gap-4 xl:grid-cols-[1fr_1.7fr]">
                <div className="relative isolate flex flex-col justify-between overflow-hidden rounded-[var(--radius-media)] p-8 sm:p-10">
                  <div
                    aria-hidden
                    className="absolute inset-0 -z-10"
                    style={{ background: "linear-gradient(135deg, #020c33 0%, #03134e 60%, #014ffa 140%)" }}
                  />
                  <p className="text-sm font-semibold text-ink-soft">Čas majitelky</p>
                  <div className="mt-10">
                    <p className="whitespace-nowrap text-6xl font-bold tracking-[-0.04em] text-ink sm:text-7xl 2xl:text-8xl">1 hodina</p>
                    <p className="mt-4 max-w-[34ch] text-[17px] leading-relaxed text-ink-soft">
                      Za celý projekt, od první domluvy po spuštění. Nemusela se učit nic technického.
                    </p>
                  </div>
                </div>

                <div className="rounded-[var(--radius-media)] bg-surface p-8 ring-1 ring-line sm:p-10">
                  <p className="text-sm font-semibold text-ink-soft">Na nás bylo všechno ostatní</p>
                  <ul className="mt-6 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                    {OUR_WORK.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[16px] leading-snug text-ink">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue" strokeWidth={2.5} aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 border-t border-line pt-6 text-[16px] leading-relaxed text-ink-soft">
                    Platba, poukaz, e-maily i evidence musí fungovat jako jeden celek, ve dne i ve tři ráno. Když jedna věc vypadne, zákazník zaplatí a poukaz nedostane. Proto to celé stavíme a hlídáme my. Majitelka jen vidí, jak chodí prodeje.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal className="relative isolate grid items-center gap-10 overflow-hidden rounded-[var(--radius-media)] p-8 sm:p-12 lg:grid-cols-[1.3fr_1fr] lg:p-16">
              <div
                aria-hidden
                className="absolute inset-0 -z-10"
                style={{ background: "linear-gradient(135deg, #020c33 0%, #03134e 50%, #020c33 100%)" }}
              />
              <div>
                <p className="text-sm font-semibold text-ink-soft">Výsledek</p>
                <p className="mt-4 text-balance text-3xl font-bold leading-tight tracking-[-0.025em] text-ink sm:text-4xl lg:text-5xl">
                  Přes 40 000 Kč za první 3 měsíce. A poukazy se prodávají dál.
                </p>
                <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-ink-soft">
                  Upozornění na každý prodej chodí i nám, takže vidíme, kdy lidé nakupují: často v deset, jedenáct nebo dvanáct večer, kdy má studio dávno zavřeno. Systém od spuštění běží sám a studio dostává peníze předem, ještě než klient přijde na rituál.
                </p>
              </div>
              <VoucherCard className="mx-auto lg:mx-0 lg:justify-self-end" />
            </Reveal>

            <div id="ozvu-se">
              <Reveal className="grid gap-10 rounded-[var(--radius-media)] bg-bg-alt/80 p-6 ring-1 ring-line sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 xl:p-14">
                <div>
                  <p className="text-sm font-semibold text-blue">Nezávazně</p>
                  <h2 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-[-0.025em] text-ink lg:text-[2.75rem]">
                    Šlo by to i u vás?
                  </h2>
                  <p className="mt-5 max-w-[48ch] text-[17px] leading-relaxed text-ink-soft lg:text-lg">
                    Nechte mi jméno a telefon. Ozvu se, zeptám se na pár věcí o vašem podnikání a řeknu vám na rovinu, jestli by vám online poukazy vydělávaly.
                  </p>
                  <ul className="mt-8 grid gap-3 text-[16px] text-ink">
                    {["Hovor je nezávazný", "Nemusíte nic připravovat", "Když to u vás nedává smysl, řeknu vám to"].map((t) => (
                      <li key={t} className="flex items-center gap-3">
                        <Check className="h-4 w-4 shrink-0 text-blue" strokeWidth={2.5} aria-hidden />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <LeadForm topic={LEAD_TOPIC} source="elysee-studie-uprostred" />
              </Reveal>
            </div>

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
                <PrimaryButton href="#kontakt">Zjistit, jestli to půjde u mě</PrimaryButton>
              </div>
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

        <section id="kontakt" className="section relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{ background: "radial-gradient(50% 60% at 15% 70%, rgba(3,19,78,0.7) 0%, rgba(1,1,1,0) 70%)" }}
          />
          <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold text-blue">Kontakt</p>
              <h2 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-[-0.025em] text-ink lg:text-5xl">
                Chcete poukazy, které se prodávají samy?
              </h2>
              <p className="mt-5 max-w-[48ch] text-[17px] leading-relaxed text-ink-soft lg:text-lg">
                Nechte mi jméno a telefon. Ozvu se a společně zjistíme, jestli by to šlo i u vás.
              </p>

              <div className="mt-12">
                <p className="text-sm font-semibold text-ink">Co se stane dál</p>
                <ol className="mt-5 grid gap-4">
                  {NEXT_STEPS.map((s, i) => (
                    <li key={s} className="flex items-baseline gap-4 text-[16px] text-ink-soft">
                      <span className="text-sm font-semibold tabular-nums text-blue">{String(i + 1).padStart(2, "0")}</span>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-12 flex items-center gap-5">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-1 ring-line">
                  <Image src={CONTACT.photo} alt={CONTACT.person} fill sizes="80px" className="object-cover object-[50%_25%]" />
                </div>
                <div className="text-[15px]">
                  <p className="font-semibold text-ink">{CONTACT.person}</p>
                  <p className="mt-0.5 text-ink-soft">Raději napřímo?</p>
                  <div className="mt-1.5 flex flex-wrap gap-x-5 gap-y-1">
                    <a href={CONTACT.phoneHref} className="font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink">
                      {CONTACT.phone}
                    </a>
                    <a href={`mailto:${CONTACT.email}`} className="font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink">
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="self-start rounded-[var(--radius-media)] bg-bg-alt/80 p-6 ring-1 ring-line backdrop-blur sm:p-10 xl:p-12">
              <p className="mb-6 text-xl font-bold text-ink">Zavolejte mi zpět</p>
              <LeadForm topic={LEAD_TOPIC} source="elysee-studie-konec" />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
