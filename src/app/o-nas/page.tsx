import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import Container from "@/components/site/Container";
import Reveal from "@/components/site/Reveal";
import { PrimaryButton } from "@/components/site/Button";
import { CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kdo stojí za Webinho | Webinho",
  description:
    "Za Webinho stojí Lukáš Přibyla a Petr Boček. Pomáhají firmám hlavně v Moravskoslezském kraji mít web, který přivádí poptávky a dobře je reprezentuje.",
  alternates: { canonical: "/o-nas" },
};

const FOCUS = [
  { title: "Systém na zakázky a poptávky", text: "Formuláře, automatické e-maily, rezervace, platby nebo prodej poukazů online." },
  { title: "Reprezentace firmy", text: "Web, který vypadá stejně profesionálně jako vaše práce." },
  { title: "Digitální vizitka", text: "Místo, kam můžete s klidem poslat každého zákazníka." },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="relative overflow-hidden pt-[120px] pb-16 lg:pt-[150px] lg:pb-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{ background: "radial-gradient(55% 50% at 75% 20%, rgba(3,19,78,0.8) 0%, rgba(1,1,1,0) 70%)" }}
          />
          <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <p className="flex items-center gap-2.5 text-sm font-semibold text-ink-soft">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-blue" />
                O nás
              </p>
              <h1 className="mt-6 text-balance text-[2.5rem] font-bold leading-[1.05] tracking-[-0.035em] text-ink sm:text-6xl xl:text-[4.5rem]">
                Kdo stojí za projektem Webinho
              </h1>
              <div className="mt-8 max-w-[56ch] space-y-5 text-lg leading-relaxed text-ink-soft">
                <p>
                  Webinho jsme vytvořili s <strong className="font-semibold text-ink">Petrem Bočkem</strong>, abychom pomohli firmám a podnikatelům být vidět před jejich cílovými zákazníky.
                </p>
                <p>
                  Tvoříme weby, které přinášejí zakázky, sbírají prodeje a fungují jako krásná vizitka. Taková, která u zákazníka udělá rozdíl.
                </p>
                <p>
                  Jsem <strong className="font-semibold text-ink">Lukáš Přibyla</strong> a s každým klientem jednám napřímo. Nejvíc pracujeme pro firmy z Moravskoslezského kraje, ale rádi vezmeme i projekt odjinud.
                </p>
              </div>
            </div>
            <Reveal>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[var(--radius-media)] ring-1 ring-line lg:ml-auto lg:mr-0">
                <Image
                  src={CONTACT.photo}
                  alt="Lukáš Přibyla"
                  fill
                  preload
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover object-[50%_30%]"
                />
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="section pt-8 lg:pt-12">
          <Container>
            <h2 className="max-w-3xl text-balance text-[2rem] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[2.5rem] lg:text-[3.25rem]">
              Na čem pro firmy pracujeme
            </h2>
            <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-3 lg:mt-16">
              {FOCUS.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.06} className="border-t border-line pt-7">
                  <p className="text-sm font-semibold tabular-nums text-blue">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 text-xl font-bold text-ink lg:text-[22px]">{f.title}</h3>
                  <p className="mt-3 max-w-[40ch] text-[16px] leading-relaxed text-ink-soft">{f.text}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-20 flex flex-col gap-6 border-t border-line pt-12 sm:flex-row sm:items-center sm:justify-between lg:mt-28">
              <p className="text-balance text-2xl font-bold tracking-[-0.02em] text-ink lg:text-3xl">Chcete web, který pro vás pracuje?</p>
              <PrimaryButton href="/kontakt" className="h-14 px-8 text-base">
                Nezávazně se ozvat
              </PrimaryButton>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
