import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů | Webinho",
};

export default function OchranaOsobnichUdaju() {
  return (
    <>
      <Nav />
      <main className="flex-1 bg-bg py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <span className="glass inline-block rounded-full px-3 py-1 text-xs font-semibold text-ink-soft">
            Koncept — čeká na doplnění kontaktního e-mailu
          </span>
          <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Ochrana osobních údajů
          </h1>
          <p className="mt-3 text-sm text-ink-soft">Zásady zpracování osobních údajů (GDPR) pro web webinho.cz.</p>

          <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-ink-soft">
            <section>
              <h2 className="font-heading text-lg font-bold text-ink">1. Správce osobních údajů</h2>
              <p className="mt-2">
                Správcem osobních údajů je <strong className="font-semibold text-ink">Lukáš Přibyla</strong>,
                IČO: 23565667, se sídlem Hrnčířská 124/9, Opava, kontaktní e-mail: [DOPLNIT] (dále jen
                „správce“).
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-ink">2. Jaké údaje zpracováváme</h2>
              <p className="mt-2">
                Při odeslání poptávkového formuláře zpracováváme jméno, e-mail, telefon a obsah zprávy,
                které nám dobrovolně poskytnete. Tyto údaje slouží výhradně k tomu, abychom se vám mohli
                ozvat a připravit nezávazný návrh webu.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-ink">3. Cookies a měření návštěvnosti</h2>
              <p className="mt-2">
                Web používá nezbytné technické cookies pro svůj chod. Dále používáme{" "}
                <strong className="font-semibold text-ink">Google Analytics 4</strong> pro měření
                návštěvnosti — tyto cookies se{" "}
                <strong className="font-semibold text-ink">načtou až po vašem souhlasu</strong> v cookie
                liště, kdykoliv jej můžete odvolat tlačítkem „Nastavení cookies“ v patičce. V budoucnu
                plánujeme doplnit i Meta Pixel (měření a cílení reklamních kampaní na Facebooku a
                Instagramu) — až jej aktivujeme, tuto stránku aktualizujeme.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-ink">4. Doba uchování a práva subjektu údajů</h2>
              <p className="mt-2">
                Údaje z poptávkového formuláře uchováváme po dobu nezbytnou k vyřízení poptávky a případné
                spolupráce. <strong className="font-semibold text-ink">Máte právo na přístup k údajům,
                jejich opravu, výmaz, omezení zpracování a přenositelnost.</strong> Žádosti směřujte na
                [DOPLNIT e-mail].
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-ink">5. Příjemci údajů</h2>
              <p className="mt-2">
                Údaje z formuláře zpracováváme prostřednictvím e-mailové služby Resend za účelem doručení
                poptávky. Data o návštěvnosti z Google Analytics 4 zpracovává společnost Google (po vašem
                souhlasu s cookies). Po nasazení Meta Pixelu doplníme informace o zpracování dat i touto
                službou.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
