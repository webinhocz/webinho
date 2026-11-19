import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Check, Plus, X } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import Container from "@/components/site/Container";
import Reveal from "@/components/site/Reveal";
import VoucherCard from "@/components/site/VoucherCard";
import LeadForm from "@/components/site/LeadForm";
import ChristmasNote from "@/components/site/ChristmasNote";
import { PrimaryButton, TextLink } from "@/components/site/Button";
import { TestimonialCard } from "@/components/site/Testimonials";
import { CONTACT, TESTIMONIALS } from "@/lib/content";

const title = "Případová studie Élysée Garden: 40 000 Kč z poukazů | Webinho";
const description =
  "Head Spa studio v Opavě prodalo přes web za 3 měsíce dárkové poukazy za více než 40 000 Kč. Poukazy se prodávají nonstop, i když má studio zavřeno. Majitelku to stálo hodinu času.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/pripadove-studie/elysee-garden" },
  // without this, link previews (Messenger, WhatsApp) show the homepage title and URL
  openGraph: {
    title,
    description,
    url: "/pripadove-studie/elysee-garden",
    siteName: "Webinho",
    locale: "cs_CZ",
    type: "article",
    images: [{ url: "/portfolio/elysee-garden-desktop.jpg", alt: "Web Élysée Garden Studio, který prodává dárkové poukazy" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/portfolio/elysee-garden-desktop.jpg"] },
};

const LEAD_TOPIC = "Online poukazy (případová studie)";

const FACTS = [
  { value: "40 000+ Kč", label: "za první 3 měsíce" },
  { value: "1 hodina", label: "času majitelky" },
  { value: "0 minut", label: "práce s každým poukazem" },
  { value: "Nonstop", label: "i když je zavřeno" },
];

const BEFORE = ["Prodej jen v otevírací době", "Poukaz musí někdo ručně vystavit", "Večer a o víkendu nevyděláte nic"];
const AFTER = ["Web prodává 24/7", "Poukaz se vystaví a odešle sám", "Peníze máte hned, službu dodáte i v klidnějších měsících"];

const VERIFY = ["Je pravý", "Ještě platí", "Nikdo ho nepoužil"];

const OUR_WORK = [
  "Web a texty v duchu studia",
  "Platební brána",
  "PDF poukaz v barvách studia",
  "Automatické e-maily zákazníkovi i studiu",
  "Samostatná evidence poukazů",
  "Úpravy po spuštění",
];

const WHO = ["Kadeřnictví a kosmetika", "Masáže a wellness", "Beauty studia", "Restaurace a kavárny", "Zážitky a kurzy", "Fitness"];

const FAQ = [
  { q: "Bude to pro mě práce navíc?", a: "Ne. Majitelka Élysée Garden nad tím strávila hodinu. Zbytek připravíme my." },
  { q: "Jak poznám, že poukaz platí?", a: "Každý má unikátní číslo v evidenci. Hned vidíte, jestli je pravý, platí a nebyl použitý." },
  { q: "Nebude se to plést s papírovými poukazy?", a: "Ne. Online poukazy mají samostatnou evidenci a vlastní číselnou řadu." },
  { q: "Bude poukaz vypadat jako náš?", a: "Ano. PDF i e-maily jsou v barvách a s logem vašeho podniku." },
  { q: "Co když zákazník poukaz ztratí?", a: "Má ho v e-mailu, takže si ho může kdykoli vytisknout znovu." },
  { q: "Kam jdou peníze?", a: "Přes platební bránu na účet vašeho podniku. Se založením brány pomůžeme." },
  { q: "Pomůžete i s propagací poukazů?", a: "Ano. Poukazy umíme propagovat třeba placenou reklamou, aby se o nich dozvědělo víc lidí." },
  { q: "Co když už web mám?", a: "Podíváme se na to v prvním hovoru a řeknu vám, co u vás dává smysl." },
  { q: "Kolik to stojí a jak dlouho to trvá?", a: "Záleží na tom, co už máte. Cenu řeknu po krátkém hovoru. Hotovo bývá do dvou týdnů." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const NEXT_STEPS = ["Do 24 hodin vám zavolám.", "Zjistíme, jestli to u vás dává smysl.", "Pak to celé připravím."];

const review = TESTIMONIALS.items[0];

function SectionTitle({ label, title, className }: { label: string; title: string; className?: string }) {
  return (
    <div className={className}>
      <p className="text-sm font-semibold text-blue">{label}</p>
      <h2 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-[-0.025em] text-ink lg:text-5xl">{title}</h2>
    </div>
  );
}

function Step({ n, title, visual, children }: { n: number; title: string; visual: React.ReactNode; children: React.ReactNode }) {
  return (
    <li className="flex flex-col">
      <div className="flex items-center justify-center rounded-[var(--radius-card)] bg-ink/[0.04] p-5 ring-1 ring-line sm:p-8 lg:min-h-[440px] lg:p-5">
        {visual}
      </div>
      <p className="mt-6 text-lg font-semibold text-ink">
        <span className="mr-2 text-sm tabular-nums text-blue">{String(n).padStart(2, "0")}</span>
        {title}
      </p>
      <p className="mt-1.5 text-[16px] leading-relaxed text-ink-soft">{children}</p>
    </li>
  );
}

const shot = "h-auto max-h-[300px] w-auto max-w-full rounded-md shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] lg:max-h-[400px]";

export default function ElyseeCaseStudy() {
  return (
    <>
      <Nav ctaHref="#ozvu-se" />
      <main className="flex-1">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

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
            <h1 className="mt-6 max-w-5xl font-bold tracking-[-0.035em]">
              <span className="block text-[2.5rem] leading-[1.05] text-ink sm:text-6xl xl:text-[4.75rem]">Přes 40 000 Kč z poukazů.</span>
              <span className="mt-3 block text-[1.75rem] leading-[1.15] text-blue-hover sm:text-4xl xl:text-5xl">Majitelku to stálo hodinu času.</span>
            </h1>
            <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-ink-soft lg:text-xl">
              Web prodává dárkové poukazy sám. Nonstop, i když má studio zavřeno.
            </p>
            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
              <PrimaryButton href="#ozvu-se" className="h-14 px-7 text-base">
                Chci to i u sebe
              </PrimaryButton>
              <TextLink href="#jak-to-funguje">Jak to funguje</TextLink>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-10 xl:grid-cols-4">
              {FACTS.map((f) => (
                <div key={f.label}>
                  <dt className="sr-only">{f.label}</dt>
                  <dd>
                    <span className="block whitespace-nowrap text-[1.75rem] font-bold tracking-[-0.02em] text-ink sm:text-3xl lg:text-[2.5rem]">{f.value}</span>
                    <span className="mt-1.5 block text-[15px] text-ink-soft">{f.label}</span>
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
          <Container className="space-y-20 lg:space-y-28">
            <Reveal className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end lg:gap-16">
              <div>
                <SectionTitle label="Problém" title="Lidé chtějí nakupovat z pohodlí domova." />
                <p className="mt-5 max-w-[44ch] text-[17px] leading-relaxed text-ink-soft lg:text-lg">
                  Když u vás nejde poukaz koupit hned, koupí dárek jinde. Vy tak přicházíte o desítky tisíc korun.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[var(--radius-card)] bg-ink/[0.03] p-6 ring-1 ring-line">
                  <p className="text-sm font-semibold text-ink-faint">Bez online poukazů</p>
                  <ul className="mt-4 space-y-3 text-[16px] leading-snug text-ink-soft">
                    {BEFORE.map((t) => (
                      <li key={t} className="flex items-start gap-3">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-ink-faint" strokeWidth={2.5} aria-hidden />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[var(--radius-card)] bg-blue-soft p-6 ring-1 ring-blue/40">
                  <p className="text-sm font-semibold text-ink">S online poukazy</p>
                  <ul className="mt-4 space-y-3 text-[16px] leading-snug text-ink">
                    {AFTER.map((t) => (
                      <li key={t} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue" strokeWidth={2.5} aria-hidden />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <div id="jak-to-funguje" className="space-y-10 lg:space-y-14">
              <Reveal>
                <SectionTitle label="Jak to funguje" title="Zákazník zaplatí. Zbytek se stane sám." className="max-w-4xl" />
              </Reveal>

              <Reveal>
                <ol className="grid gap-10 lg:grid-cols-3 lg:gap-6">
                  <Step
                    n={1}
                    title="E-mail pro zákazníka"
                    visual={
                      <Image
                        src="/portfolio/elysee-poukaz-email.jpg"
                        alt="E-mail pro zákazníka s evidenčním číslem EG-1001 a návodem, jak poukaz uplatnit"
                        width={568}
                        height={593}
                        sizes="(min-width: 1024px) 30vw, 90vw"
                        className={shot}
                      />
                    }
                  >
                    Evidenční číslo a návod, jak poukaz uplatnit.
                  </Step>
                  <Step
                    n={2}
                    title="PDF poukaz ve vaší značce"
                    visual={
                      <Image
                        src="/portfolio/elysee-poukaz-pdf.jpg"
                        alt="Dárkový poukaz v PDF v barvách Élysée Garden s kolonkami Pro a Od a evidenčním číslem EG-1001"
                        width={798}
                        height={562}
                        sizes="(min-width: 1024px) 30vw, 90vw"
                        className={shot}
                      />
                    }
                  >
                    Vytiskne, dopíše jméno a dárek má hotový do 10 minut.
                  </Step>
                  <Step n={3} title="Upozornění pro vás" visual={<VoucherCard className="max-w-[300px]" />}>
                    Hned vidíte, co se prodalo, komu a za kolik.
                  </Step>
                </ol>
              </Reveal>

              <Reveal className="flex flex-col gap-6 rounded-[var(--radius-media)] bg-surface p-7 ring-1 ring-line sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
                <div>
                  <p className="text-xl font-bold text-ink lg:text-2xl">Vlastní evidence online poukazů</p>
                  <p className="mt-2 text-[16px] text-ink-soft">Oddělená od papírových, s vlastní číselnou řadou. Podle čísla hned víte:</p>
                </div>
                <ul className="flex flex-wrap gap-x-8 gap-y-3">
                  {VERIFY.map((v) => (
                    <li key={v} className="flex items-center gap-3 text-lg font-semibold text-ink">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue">
                        <Check className="h-4 w-4 text-ink" strokeWidth={3} aria-hidden />
                      </span>
                      {v}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="space-y-8 lg:space-y-10">
              <Reveal>
                <SectionTitle label="Kolik práce to majitelku stálo" title="Ona strávila hodinu. Zbytek jsme zařídili my." className="max-w-4xl" />
              </Reveal>

              <Reveal className="grid gap-4 lg:grid-cols-[1fr_1.4fr]">
                <div className="relative isolate overflow-hidden rounded-[var(--radius-media)] p-8 sm:p-10">
                  <div
                    aria-hidden
                    className="absolute inset-0 -z-10"
                    style={{ background: "linear-gradient(135deg, #020c33 0%, #03134e 60%, #014ffa 140%)" }}
                  />
                  <p className="text-sm font-semibold text-ink-soft">Čas majitelky</p>
                  <p className="mt-6 whitespace-nowrap text-6xl font-bold tracking-[-0.04em] text-ink sm:text-7xl">1 hodina</p>
                  <p className="mt-3 text-[16px] text-ink-soft">za celý projekt</p>
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
                  Přes 40 000 Kč za 3 měsíce. A prodává se dál.
                </p>
                <p className="mt-5 max-w-[46ch] text-[17px] leading-relaxed text-ink-soft">
                  Lidé nakupují často v deset, jedenáct i dvanáct večer. Studio má peníze hned a službu odvede, až se klient objedná. Prodej navíc podporuje placená reklama, s tou umíme pomoct i vám.
                </p>
              </div>
              <div className="lg:justify-self-end">
                <p className="text-sm font-semibold text-ink-soft">Jeden ze skutečných nákupů</p>
                <p className="mt-2 text-7xl font-bold tabular-nums tracking-[-0.04em] text-ink lg:text-8xl">22:06</p>
                <p className="mt-3 text-[15px] text-ink-soft">studio mělo dávno zavřeno</p>
              </div>
            </Reveal>

            <div id="ozvu-se">
              <Reveal className="grid gap-10 rounded-[var(--radius-media)] bg-bg-alt/80 p-6 ring-1 ring-line sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 xl:p-14">
                <div>
                  <p className="text-sm font-semibold text-blue">Nezávazně</p>
                  <h2 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-[-0.025em] text-ink lg:text-[2.75rem]">
                    Šlo by to i u vás?
                  </h2>
                  <p className="mt-5 max-w-[42ch] text-[17px] leading-relaxed text-ink-soft lg:text-lg">
                    Nechte mi číslo. Ozvu se vám a řeknu na rovinu, jestli by se vám to vyplatilo.
                  </p>
                  <ChristmasNote className="mt-6 max-w-[42ch]" />
                  <p className="mt-8 text-sm font-semibold text-ink-soft">Funguje třeba pro</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {WHO.map((w) => (
                      <li key={w} className="rounded-full bg-ink/[0.05] px-3.5 py-1.5 text-[14px] text-ink ring-1 ring-line">
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
                <LeadForm topic={LEAD_TOPIC} source="elysee-studie-uprostred" />
              </Reveal>
            </div>

            <Reveal className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
              <div>
                <p className="text-sm font-semibold text-blue">Časté otázky</p>
                <h2 className="mt-3 text-balance text-2xl font-bold leading-tight tracking-[-0.02em] text-ink lg:text-[2rem]">
                  Na co se ptají majitelé
                </h2>
              </div>
              <div className="max-w-[72ch] border-t border-line">
                {FAQ.map((f) => (
                  <details key={f.q} className="group border-b border-line [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[17px] font-semibold text-ink lg:text-lg">
                      {f.q}
                      <Plus className="h-5 w-5 shrink-0 text-blue transition-transform duration-200 group-open:rotate-45" aria-hidden />
                    </summary>
                    <p className="-mt-1 pb-6 pr-10 text-[16px] leading-relaxed text-ink-soft lg:text-[17px]">{f.a}</p>
                  </details>
                ))}
              </div>
            </Reveal>

            <Reveal className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-16">
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
                Chcete, aby vám poukazy prodával web?
              </h2>
              <p className="mt-5 max-w-[42ch] text-[17px] leading-relaxed text-ink-soft lg:text-lg">
                Nechte mi jméno a číslo. Ozvu se vám a zbytek zařídím.
              </p>
              <ChristmasNote className="mt-6 max-w-[42ch]" />

              <ol className="mt-10 grid gap-4">
                {NEXT_STEPS.map((s, i) => (
                  <li key={s} className="flex items-baseline gap-4 text-[16px] text-ink-soft">
                    <span className="text-sm font-semibold tabular-nums text-blue">{String(i + 1).padStart(2, "0")}</span>
                    {s}
                  </li>
                ))}
              </ol>

              <div className="mt-10 flex items-center gap-5">
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
