import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Obchodní podmínky | Webinho",
};

export default function ObchodniPodminky() {
  return (
    <>
      <Nav />
      <main className="flex-1 bg-bg py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <span className="glass inline-block rounded-full px-3 py-1 text-xs font-semibold text-ink-soft">
            Koncept — čeká na doplnění kontaktního e-mailu
          </span>
          <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Obchodní podmínky
          </h1>
          <p className="mt-3 text-sm text-ink-soft">Platné pro služby poskytované prostřednictvím webu webinho.cz.</p>

          <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-ink-soft">
            <section>
              <h2 className="font-heading text-lg font-bold text-ink">1. Provozovatel</h2>
              <p className="mt-2">
                <strong className="font-semibold text-ink">Lukáš Přibyla</strong>, IČO: 23565667, se sídlem
                Hrnčířská 124/9, Opava, fyzická osoba podnikající dle živnostenského zákona (nezapsaná v
                obchodním rejstříku), kontaktní e-mail: [DOPLNIT] (dále jen „poskytovatel“).
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-ink">2. Předmět služby</h2>
              <p className="mt-2">
                Poskytovatel na základě poptávky odeslané přes web webinho.cz zpracuje nezávazný návrh
                webové prezentace (design, strukturu a orientační rozsah). Realizace zakázky a její
                finální cena jsou vždy odsouhlaseny se zákazníkem předem, na základě zpracovaného návrhu.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-ink">3. Nezávaznost poptávky a návrhu</h2>
              <p className="mt-2">
                Odeslání poptávkového formuláře ani zpracování úvodního návrhu nezakládá žádnou smluvní
                povinnost na straně zákazníka. Ke spolupráci a fakturaci dochází až po vzájemném
                odsouhlasení rozsahu a ceny.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-ink">4. Cena a platební podmínky</h2>
              <p className="mt-2">
                Konečná cena se odvíjí od rozsahu odsouhlaseného návrhu a je vždy potvrzena oběma stranami
                před zahájením realizace. [DOPLNIT: platební podmínky, splatnost, případná záloha.]
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-ink">5. Reklamace a odpovědnost</h2>
              <p className="mt-2">[DOPLNIT dle konkrétních podmínek poskytovatele.]</p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-ink">6. Závěrečná ustanovení</h2>
              <p className="mt-2">
                Tyto podmínky se řídí právním řádem České republiky. Poskytovatel si vyhrazuje právo tyto
                podmínky v přiměřeném rozsahu upravovat.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
