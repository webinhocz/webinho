export type Locale = "cs" | "en";

export const dictionary = {
  cs: {
    nav: {
      links: [
        { href: "#o-nas", label: "Proč my" },
        { href: "#tym", label: "Tým" },
        { href: "#portfolio", label: "Portfolio" },
        { href: "#cenik", label: "Ceník" },
      ],
      cta: "Chci nezávazný návrh",
      openMenu: "Otevřít menu",
      closeMenu: "Zavřít menu",
    },
    hero: {
      badge: "Pro firmy, které chtějí web jako obchodní nástroj",
      title1: "Váš web nemá jen vypadat dobře.",
      title2: "Má vám prodávat.",
      subtitle:
        "Kompletní firemní web na míru, který sbírá poptávky, buduje důvěru a prodává i mimo otevírací dobu. Hotovo do 7 dní.",
      ctaPrimary: "Chci nezávazný návrh →",
      ctaSecondary: "Ukázky prací ↓",
      checks: ["Hotovo do 7 dní", "RUSH do 24 hodin", "Garance termínu", "SEO", "Tracking"],
    },
    costOfInaction: {
      eyebrow: "Cena nečinnosti",
      title: "Kolik vás stojí aktuální web?",
      subtitle:
        "Nejde o strašení. Jde o to, co se reálně děje mezi člověkem, který vás najde, a člověkem, který si u vás objedná.",
      points: [
        {
          title: "Špatný první dojem",
          text: "Dobrý web udělá dobrý dojem. Špatný web ho udělá i firmě, která je jinak skvělá.",
        },
        {
          title: "Nesbírá poptávky",
          text: "Návštěvník odejde dřív, než najde formulář — nebo mu prostě nevěří.",
        },
        {
          title: "Nejasná nabídka",
          text: "Nikdo pořádně neví, co přesně prodáváte a proč zrovna vy.",
        },
      ],
      caseEyebrow: "Případová studie — Obora Víno",
      caseText:
        "Pan Malucha měl přesně tenhle web — zastaralý, bez jediné poptávky. Dnes má web, který dělá skvělý první dojem a už sesbíral svoji první poptávku.",
      before: "Před",
      after: "Po",
      hint: "Přetáhněte posuvník a porovnejte.",
      altBefore: "Původní web Obora Janovská Dolina",
      altAfter: "Nový web Obora Víno od webinho",
    },
    whatYouGet: {
      eyebrow: "Co dostanete",
      title: "Web, který za vás pracuje nonstop.",
      subtitle:
        "Nejde jen o hezký design. Stavíme web tak, aby sbíral poptávky, budoval důvěru a prodával i ve chvílích, kdy vy zrovna nemůžete.",
      tabs: [
        {
          label: "Web",
          items: [
            {
              title: "Web šitý na míru",
              text: "Ne šablona, ne obyčejná vizitka. **Postavíme vám web na míru** s fotkami, službami i atmosférou vašeho podnikání.",
            },
            {
              title: "Najdou váš web na Googlu i Seznamu",
              text: "Když někdo hledá váš obor nebo přímo vaši firmu, potřebujete se tam objevit. **Bez webu jde zákazník ke konkurenci.**",
            },
            {
              title: "Web, který pracuje za vás",
              text: "Nejen reprezentuje. Díky poptávkovému formuláři vám přivádí **nové klienty 24 hodin denně**.",
            },
          ],
        },
        {
          label: "Napojení a tracking",
          items: [
            {
              title: "Google Analytics 4 & Google Tag",
              text: "Napojíme **GA4 a Google Tag Manager**, abyste přesně věděli, odkud lidé přichází a co na webu dělají.",
            },
            {
              title: "Meta Pixel",
              text: "Nastavíme **Meta Pixel** pro sledování konverzí a cílení reklamy na Facebooku a Instagramu.",
            },
            {
              title: "Platební brány",
              text: "Napojíme **platební bránu** podle potřeby — od jednorázových plateb po e-shopové řešení.",
            },
            {
              title: "Automatizované e-maily",
              text: "Poptávky a objednávky z webu vám i klientům pošleme **automaticky** e-mailem, bez ruční práce.",
            },
          ],
        },
      ],
      note: "Ať web zatím nemáte, nebo je zastaralý. **Špatný první dojem odradí zákazníka i od velké firmy se silným kapitálem.** Setkali jsme se s oběma případy a víme, jak to změnit.",
    },
    ourStory: {
      eyebrow: "Náš příběh",
      title: "Jak to celé začalo",
      text: "Začalo to jednoduše. V okolí jsme měli známé, kteří potřebovali web. Udělali jsme jim dobrou práci a doporučili nás dál. Řekli jsme si, že bychom takhle mohli pomoct mnohem víc byznysům. **Dnes to bereme jako reálnou práci, ne jako brigádu vedle.** Pomáháme podnikatelům a majitelům firem být vidět na internetu.",
      photoSoon: "foto brzy",
    },
    team: {
      eyebrow: "Kdo za tím stojí",
      title: "Tým webinho",
      photoSoon: "foto brzy",
      members: [
        { name: "Lukáš Přibyla", role: "CEO", photo: "/team/lukas-pribyla.jpg" as string | undefined },
        { name: "Petr Boček", role: "Specialista na tvorbu webu", photo: undefined as string | undefined },
      ],
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "Weby, které jsme vytvořili",
      subtitle: "Klikněte na kartu a otevřete si živý web.",
    },
    elyseeResults: {
      eyebrow: "Případová studie — Élysée Garden",
      title: "Její první měsíc s novým webem",
      text: "Nový web pro Head Spa studio Élysée Garden nesbírá jen poptávky — přímo na něm si klientky můžou koupit i dárkové poukazy. **Tohle všechno se stalo už během prvního měsíce od spuštění** — a web jí poběží dál, dlouhodobě.",
      badge: "Prvních 30 dní od spuštění webu",
      stats: [
        { value: 11, label: "Poptávek po kadeřnici" },
        { value: 4, label: "Prodaných poukazů" },
        { value: 4.5, displayValue: "4 500 Kč", label: "Tržby z poukazů" },
      ],
      note: "Prodej poukazů běží přes web nonstop — **i ve chvílích, kdy klientku fyzicky neobsluhuje ani s ní netelefonuje**. Cash flow tak není závislý jen na tom, co se stihne v salonu.",
    },
    process: {
      eyebrow: "Kolik práce to je pro vás",
      title: "Jen 60 minut vašeho času.",
      steps: [
        {
          title: "Řeknete nám o byznysu",
          text: "Co děláte, co prodáváte, co máte rádi, na čem si zakládáte a co od webu čekáte.",
        },
        {
          title: "Vyplníte onboarding formulář",
          text: "Krátký formulář s fotkami, texty a info o byznysu — **vyplníte sami, nebo si ho projdeme spolu na callu**.",
        },
        {
          title: "Připravíme kompletní web",
          text: "Strukturu, texty, design, formuláře i technické řešení — **na míru vašemu byznysu**.",
        },
        {
          title: "Dáte nám feedback",
          text: "Podíváte se na návrh a řeknete, co upravit.",
        },
        {
          title: "Spustíme web",
          text: "Od prvního dne vás reprezentuje a **sbírá poptávky**.",
        },
      ],
    },
    delivery: {
      eyebrow: "Rychlost realizace",
      title: "Standardní realizace, nebo prioritní RUSH.",
      subtitle:
        "Web může být hotový a online do 7 dní, pokud dodáte podklady, feedback a přístupy k doméně/DNS včas. Když to spěchá víc, máme prioritní realizaci.",
      tiers: [
        {
          name: "Standard",
          days: "do 7 dní",
          price: "V ceně",
          badge: null as string | null,
          desc: "Doporučený postup pro většinu projektů — rychle, ale bez kompromisů v kvalitě.",
        },
        {
          name: "RUSH 48",
          days: "do 48 hodin",
          price: "+7 000 Kč",
          badge: "Prioritní realizace",
          desc: "Web hotový do 48 hodin od potvrzení kompletních podkladů. Jdete mimo pořadí.",
        },
        {
          name: "RUSH 24",
          days: "do 24 hodin",
          price: "+10 000 Kč",
          badge: "Nejvyšší priorita",
          desc: "Web hotový do 24 hodin od potvrzení kompletních podkladů. Pro launch, který nemůže čekat.",
        },
      ],
      cta: "Chci nezávazný návrh →",
      note: "RUSH realizace vyžaduje kompletní podklady předem — logo, texty, fotky, přístupy. Bez nich neumíme garantovat rychlost.",
      linkText: "Potřebujete web fakt narychlo? Zjistěte víc o expresní tvorbě webu →",
    },
    pricing: {
      eyebrow: "Hlavní nabídka",
      title: "Kompletní firemní web na míru",
      subtitle:
        "Jedna jasná cena za web, který dělá to, co má — sbírá poptávky, buduje důvěru a prodává i ve chvílích, kdy vy zrovna nemůžete.",
      offer: {
        name: "Kompletní firemní web na míru",
        price: "29 990",
        currency: " Kč",
        features: [
          "Struktura webu",
          "Custom design",
          "Copywriting",
          "Desktop, tablet i mobil",
          "Poptávkové a kontaktní formuláře",
          "CTA struktura",
          "Základní on-page SEO",
          "Technické nastavení",
          "Analytika a tracking tam, kde dává smysl",
          "Napojení domény a DNS",
          "Spuštění webu",
          "Potřebná napojení",
          "Online poukazy tam, kde dávají smysl",
          "Běžné úpravy před finálním spuštěním",
        ],
        paymentSplit: ["50 % před zahájením", "50 % po finálním spuštění"],
        cta: "Chci nezávazný návrh →",
      },
      note: "Rozsah je vždy podle konkrétního projektu — cena 29 990 Kč platí pro kompletní firemní web. U netypicky rozsáhlého projektu (např. e-shop s desítkami produktů) rozsah i cenu potvrdíme předem, ještě než začneme.",
    },
    guaranteeCapacity: {
      eyebrow: "Proč nám můžete věřit",
      guarantee: {
        title: "Garance termínu",
        text: "Pokud web nespustíme v potvrzeném termínu z důvodu na naší straně — byť o jediný den — dostanete slevu **5 000 Kč**. Za každý další započatý týden zpoždění dalších **5 000 Kč**.",
        note: "Garance se nevztahuje na zpoždění způsobené klientem — např. nedodanými podklady, feedbackem nebo přístupy.",
      },
      capacity: {
        title: "Maximálně 5 projektů měsíčně",
        text: "Nový web nedáváme na sériovou výrobu. Abychom drželi rychlost i kvalitu, bereme si každý měsíc jen **omezený počet nových projektů**.",
      },
    },
    vouchers: {
      eyebrow: "Online poukazy",
      title: "Váš web nemá provozní dobu. Pracuje nonstop.",
      subtitle:
        "Pro beauty, head spa, wellness, masáže, zážitky a podobné služby umíme přímo na web napojit prodej dárkových poukazů.",
      steps: ["Zákazník vybere poukaz", "Zaplatí online", "Dostane ho automaticky"],
      proof: "Přesně takhle to funguje na webu Élysée Garden — **4 prodané poukazy hned první měsíc**.",
      proofLink: "Ukázat výsledky ↑",
    },
    testimonials: {
      eyebrow: "Reference",
      title: "Co říkají klienti",
      subtitle: "Pár slov od lidí, se kterými jsme spolupracovali.",
      reviews: [
        {
          quote:
            "S Lukášem jsem spokojená. Pomohl mi dotáhnout každý detail webu přesně podle mých představ a navíc během dvou pracovních dnů vytvořil landing page pro naši kampaň. Díky novému webu prodávám poukazy online a získávám nové poptávky na kadeřnické služby. Doporučuji.",
          author: "M. Stavařová — Élysée Garden Studio",
          image: "/portfolio/elysee-garden-stavarova.jpg",
          alt: "Majitelka Élysée Garden Studio",
        },
        {
          quote:
            "Doporučuji webinho, pomohli mi sestavit landing page pro kampaň během chvíle — s kompletním nastavením Meta Pixelu, Google Tagu i platební brány. Byl jsem velmi spokojený.",
          author: "David Kittel, EFA",
          image: "/portfolio/kittel-consult.jpg",
          alt: "Web finančního poradce Davida Kittela",
        },
        {
          quote:
            "Lukáš mi pomohl sestavit můj web podle mých představ během krátké doby a do posledního detailu. Doporučuji!",
          author: "Petr Pustelník — Pustelník Coach",
          image: "/portfolio/pustelnik-coach.jpg",
          alt: "Web Pustelník Coach",
        },
        {
          quote:
            "Kluky z webinha mohu jen doporučit. Pomohli nám sestavit web pro naši oboru a brzy plánujeme udělat další.",
          author: "Miloš Malucha — Obora Víno",
          image: "/portfolio/obora-vino.jpg",
          alt: "Web Obora Víno",
        },
        {
          quote:
            "S Lukášem se známe delší dobu, a když jsem potřeboval nový web, věděl jsem, na koho se obrátit. 10/10.",
          author: "Didaprax",
          image: "/portfolio/didaprax.jpg",
          alt: "Web Didaprax",
        },
      ],
    },
    faq: {
      eyebrow: "Časté otázky",
      title: "Co byste ještě chtěli vědět",
      subtitle: "Odpovědi na nejčastější otázky k poptávce, ceně i technickému zázemí.",
      items: [
        {
          question: "Je poptávka nezávazná?",
          answer:
            "**Ano, poptávka i úvodní návrh jsou zcela nezávazné.** Napíšete nám o svém byznysu, my připravíme návrh — a teprve pak se rozhodujete.",
        },
        {
          question: "Co přesně dostanu za 29 990 Kč?",
          answer:
            "**Kompletní firemní web na míru** — strukturu, custom design, copywriting, formuláře, základní SEO, technické nastavení, napojení domény i spuštění. Rozsah se odvíjí od konkrétního projektu, cena je ale jasná od začátku.",
        },
        {
          question: "Jak funguje RUSH 48 a RUSH 24?",
          answer:
            "Když to spěchá, web dokážeme spustit **do 48 nebo 24 hodin** od potvrzení kompletních podkladů (+7 000 Kč, resp. +10 000 Kč). Je to prioritní realizace, ne sleva na kvalitě.",
        },
        {
          question: "Co když web nestihnete v domluveném termínu?",
          answer:
            "Garantujeme ho. Pokud termín podklouzneme z naší strany, dostanete **slevu 5 000 Kč** — a dalších 5 000 Kč za každý další započatý týden zpoždění.",
        },
        {
          question: "Proč berete jen 5 nových projektů měsíčně?",
          answer:
            "Abychom **udrželi rychlost i kvalitu**. Radši méně projektů odvedených pořádně než hodně projektů narychlo.",
        },
        {
          question: "Umíte prodávat online poukazy?",
          answer:
            "Ano — hlavně pro beauty, head spa, wellness, masáže a zážitkové služby. Zákazník si poukaz **vybere, zaplatí online a dostane ho automaticky**.",
        },
        {
          question: "Najdou mě zákazníci na Googlu?",
          answer:
            "Ano, **každý web stavíme se základním SEO** už od začátku, ať vás lidé najdou na Googlu i Seznamu.",
        },
        {
          question: "Umíte napojit Google Analytics nebo Meta Pixel?",
          answer:
            "Ano, **GA4, Google Tag i Meta Pixel dokážeme napojit** — stejně tak platební bránu nebo automatické zasílání e-mailů.",
        },
        {
          question: "Budu mít web pod vlastní kontrolou?",
          answer: "Ano, **web i doména zůstávají vaše** — vlastníte je i po předání.",
        },
      ],
    },
    contactForm: {
      eyebrow: "Kontakt",
      title: "Nezávazná poptávka",
      subtitle:
        "Projděte tři krátké kroky a řekněte nám svou představu o webu. Ozveme se vám zpět a na základě toho připravíme **návrh na míru — teprve pak řešíme cenu**. Celé je to nezávazné.",
      steps: ["Typ projektu", "O byznysu", "Kontakt"],
      successTitle: "Díky za poptávku",
      successText:
        "Ozveme se vám co nejdřív a domluvíme si detaily. Na základě toho připravíme nezávazný návrh na míru.",
      step0Title: "Co potřebujete?",
      projectTypes: [
        { id: "Nový web", label: "Nový web" },
        { id: "Redesign", label: "Redesign" },
      ],
      step1Title: "Pár slov o byznysu",
      fieldObor: "Obor podnikání *",
      fieldOborPlaceholder: "Kavárna, finanční poradce, e-shop...",
      fieldWebUrl: "Odkaz na váš současný web",
      optional: "(volitelné)",
      fieldWebUrlPlaceholder: "https://vasfirma.cz",
      fieldMaWeb: "Máte už nějaký web?",
      yes: "Ano",
      no: "Ne",
      back: "Zpět",
      continueLabel: "Pokračovat →",
      step2Title: "Kontaktní údaje",
      fieldJmeno: "Jméno *",
      fieldEmail: "E-mail *",
      fieldTelefon: "Telefon *",
      fieldTelefonPlaceholder: "123 456 789",
      fieldRush: "Mám zájem o RUSH realizaci (web do 24–48 hodin)",
      fieldZprava: "Zpráva",
      fieldZpravaPlaceholder: "Cokoliv, co bychom měli vědět navíc.",
      sending: "Odesílám…",
      submit: "Odeslat poptávku",
      errorText: "Něco se pokazilo. Zkuste to prosím znovu, nebo napište přímo na e-mail.",
    },
    proposalCta: {
      eyebrow: "Nezávazná poptávka",
      title: "Chcete tenhle web i pro svůj byznys?",
      subtitle:
        "Napíšete nám, o čem vaše podnikání je. My **připravíme kompletní web na míru — cenu 29 990 Kč znáte hned na začátku**.",
      cta: "Chci nezávazný návrh →",
      ctaSecondary: "Domluvit krátkou konzultaci",
    },
    proposalPage: {
      back: "← Zpět na webinho.cz",
      badge: "Nezávazně a zdarma",
      title1: "Návrh webu",
      title2: "pro vaše podnikání.",
      subtitle:
        "Vyplnění zabere pár minut — projděte tři krátké kroky a řekněte nám svou představu. Ozveme se s nezávazným návrhem na míru, cenu řešíme až potom.",
      checks: ["Zdarma a nezávazně", "Odpověď do 24–48 hodin", "Návrh na míru vašemu byznysu"],
      portfolioLink: "Chci se nejdřív podívat na vaše práce ↓",
    },
    footer: {
      tagline: "Kompletní firemní web, který za vás pracuje nonstop.",
      contact: "Nezávazný návrh →",
      terms: "Obchodní podmínky",
      privacy: "Ochrana osobních údajů",
      cookieSettings: "Nastavení cookies",
      rights: "Všechna práva vyhrazena.",
    },
    cookieConsent: {
      text: "Používáme cookies pro fungování webu a měření návštěvnosti. Více v",
      linkText: "ochraně osobních údajů",
      essential: "Pouze nezbytné",
      acceptAll: "Přijmout vše",
    },
    legal: {
      terms: {
        title: "Obchodní podmínky",
        subtitle: "Platné pro služby poskytované prostřednictvím webu webinho.cz.",
        badge: "Koncept — čeká na doplnění reklamačních podmínek",
        sections: [
          {
            heading: "1. Provozovatel",
            body: "**Lukáš Přibyla**, IČO: 23565667, se sídlem Hrnčířská 124/9, Opava, fyzická osoba podnikající dle živnostenského zákona (nezapsaná v obchodním rejstříku), kontaktní e-mail: info@webinho.cz (dále jen „poskytovatel“).",
          },
          {
            heading: "2. Předmět služby",
            body: "Poskytovatel na základě poptávky odeslané přes web webinho.cz zpracuje nezávazný návrh webové prezentace (design, strukturu a orientační rozsah). Realizace zakázky a její finální cena jsou vždy odsouhlaseny se zákazníkem předem, na základě zpracovaného návrhu.",
          },
          {
            heading: "3. Nezávaznost poptávky a návrhu",
            body: "Odeslání poptávkového formuláře ani zpracování úvodního návrhu nezakládá žádnou smluvní povinnost na straně zákazníka. Ke spolupráci a fakturaci dochází až po vzájemném odsouhlasení rozsahu a ceny.",
          },
          {
            heading: "4. Cena a platební podmínky",
            body: "Cena za kompletní firemní web na míru je 29 990 Kč, konkrétní rozsah se odvíjí od projektu a je vždy potvrzen před zahájením realizace. **Platba probíhá ve dvou částech: 50 % před zahájením prací a 50 % po finálním spuštění webu.** Expresní realizace (RUSH 48 / RUSH 24) je zpoplatněna příplatkem 7 000 Kč, resp. 10 000 Kč, a vyžaduje kompletní podklady dodané předem. Při prodlení ze strany poskytovatele s potvrzeným termínem spuštění náleží zákazníkovi sleva 5 000 Kč a dalších 5 000 Kč za každý další započatý týden zpoždění; tato garance se netýká zpoždění způsobeného zákazníkem (např. nedodanými podklady, feedbackem nebo přístupy).",
          },
          {
            heading: "5. Reklamace a odpovědnost",
            body: "[DOPLNIT dle konkrétních podmínek poskytovatele.]",
          },
          {
            heading: "6. Závěrečná ustanovení",
            body: "Tyto podmínky se řídí právním řádem České republiky. Poskytovatel si vyhrazuje právo tyto podmínky v přiměřeném rozsahu upravovat.",
          },
        ],
      },
      privacy: {
        title: "Ochrana osobních údajů",
        subtitle: "Zásady zpracování osobních údajů (GDPR) pro web webinho.cz.",
        sections: [
          {
            heading: "1. Správce osobních údajů",
            body: "Správcem osobních údajů je **Lukáš Přibyla**, IČO: 23565667, se sídlem Hrnčířská 124/9, Opava, kontaktní e-mail: info@webinho.cz (dále jen „správce“).",
          },
          {
            heading: "2. Jaké údaje zpracováváme",
            body: "Při odeslání poptávkového formuláře zpracováváme jméno, e-mail, telefon a obsah zprávy, které nám dobrovolně poskytnete. Tyto údaje slouží výhradně k tomu, abychom se vám mohli ozvat a připravit nezávazný návrh webu.",
          },
          {
            heading: "3. Cookies a měření návštěvnosti",
            body: "Web používá nezbytné technické cookies pro svůj chod. Dále používáme **Google Analytics 4** pro měření návštěvnosti — tyto cookies se **načtou až po vašem souhlasu** v cookie liště, kdykoliv jej můžete odvolat tlačítkem „Nastavení cookies“ v patičce. V budoucnu plánujeme doplnit i Meta Pixel (měření a cílení reklamních kampaní na Facebooku a Instagramu) — až jej aktivujeme, tuto stránku aktualizujeme.",
          },
          {
            heading: "4. Doba uchování a práva subjektu údajů",
            body: "Údaje z poptávkového formuláře uchováváme po dobu nezbytnou k vyřízení poptávky a případné spolupráce. **Máte právo na přístup k údajům, jejich opravu, výmaz, omezení zpracování a přenositelnost.** Žádosti směřujte na info@webinho.cz.",
          },
          {
            heading: "5. Příjemci údajů",
            body: "Údaje z formuláře zpracováváme prostřednictvím e-mailové služby Resend za účelem doručení poptávky. Data o návštěvnosti z Google Analytics 4 zpracovává společnost Google (po vašem souhlasu s cookies). Po nasazení Meta Pixelu doplníme informace o zpracování dat i touto službou.",
          },
        ],
      },
    },
  },
  en: {
    nav: {
      links: [
        { href: "#o-nas", label: "Why us" },
        { href: "#tym", label: "Team" },
        { href: "#portfolio", label: "Portfolio" },
        { href: "#cenik", label: "Pricing" },
      ],
      cta: "Get a free proposal",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      badge: "For businesses that want their website to sell",
      title1: "Your website shouldn't just look good.",
      title2: "It should sell for you.",
      subtitle:
        "A complete custom business website that collects leads, builds trust, and sells even outside office hours. Live in 7 days.",
      ctaPrimary: "Get a free proposal →",
      ctaSecondary: "See our work ↓",
      checks: ["Live in 7 days", "RUSH in 24 hours", "Deadline guarantee", "SEO", "Tracking"],
    },
    costOfInaction: {
      eyebrow: "The cost of doing nothing",
      title: "How much is your current website costing you?",
      subtitle:
        "This isn't scare tactics. It's what actually happens between someone finding you and someone becoming your customer.",
      points: [
        {
          title: "A bad first impression",
          text: "A good website makes a good impression. A bad one does too — even for a company that's otherwise great.",
        },
        {
          title: "It doesn't collect inquiries",
          text: "The visitor leaves before finding the form — or just doesn't trust it.",
        },
        {
          title: "An unclear offer",
          text: "Nobody really knows what you sell, or why you.",
        },
      ],
      caseEyebrow: "Case study — Obora Víno",
      caseText:
        "Mr. Malucha had exactly this kind of website — outdated, with zero inquiries. Today he has a website that makes a great first impression, and it's already landed its first inquiry.",
      before: "Before",
      after: "After",
      hint: "Drag the slider to compare.",
      altBefore: "Original Obora Janovská Dolina website",
      altAfter: "New Obora Víno website by webinho",
    },
    whatYouGet: {
      eyebrow: "What you get",
      title: "A website that works for you around the clock.",
      subtitle:
        "It's not just about good design. We build websites that collect leads, build trust, and sell even when you can't.",
      tabs: [
        {
          label: "Website",
          items: [
            {
              title: "A website tailored to you",
              text: "Not a template, not a plain brochure site. **We build your website from scratch** with your photos, services, and the feel of your business.",
            },
            {
              title: "They'll find your website on Google",
              text: "When someone searches for your industry or your business by name, you need to show up. **Without a website, the customer goes to your competitor.**",
            },
            {
              title: "A website that works for you",
              text: "It doesn't just represent you. Thanks to the contact form, it brings you **new clients 24 hours a day**.",
            },
          ],
        },
        {
          label: "Integrations & tracking",
          items: [
            {
              title: "Google Analytics 4 & Google Tag",
              text: "We'll connect **GA4 and Google Tag Manager** so you know exactly where your visitors come from and what they do on your site.",
            },
            {
              title: "Meta Pixel",
              text: "We'll set up **Meta Pixel** for conversion tracking and ad targeting on Facebook and Instagram.",
            },
            {
              title: "Payment gateways",
              text: "We'll connect a **payment gateway** as needed — from one-off payments to a full online store.",
            },
            {
              title: "Automated emails",
              text: "Inquiries and orders from your website get sent to you and your clients **automatically** by email — no manual work needed.",
            },
          ],
        },
      ],
      note: "Whether you don't have a website yet, or it's outdated. **A bad first impression can turn customers away even from a large, well-funded company.** We've seen both cases, and we know how to fix it.",
    },
    ourStory: {
      eyebrow: "Our story",
      title: "How it all started",
      text: "It started simply. We had friends nearby who needed a website. We did good work for them, and they recommended us further. We realized we could help a lot more businesses this way. **Today we treat it as real work, not a side gig.** We help entrepreneurs and business owners get seen online.",
      photoSoon: "photo coming soon",
    },
    team: {
      eyebrow: "Who's behind it",
      title: "The webinho team",
      photoSoon: "photo coming soon",
      members: [
        { name: "Lukáš Přibyla", role: "CEO", photo: "/team/lukas-pribyla.jpg" as string | undefined },
        { name: "Petr Boček", role: "Web development specialist", photo: undefined as string | undefined },
      ],
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "Websites we've built",
      subtitle: "Click a card to open the live website.",
    },
    elyseeResults: {
      eyebrow: "Case study — Élysée Garden",
      title: "Her first month with the new website",
      text: "The new website for Élysée Garden Head Spa studio doesn't just collect inquiries — clients can buy gift vouchers directly on it too. **All of this happened within the first month of launch** — and the website keeps running for her long-term.",
      badge: "First 30 days since launch",
      stats: [
        { value: 11, label: "Hairdresser inquiries" },
        { value: 4, label: "Vouchers sold" },
        { value: 4.5, displayValue: "4,500 CZK", label: "Voucher revenue" },
      ],
      note: "Voucher sales run through the website around the clock — **even while she's not physically serving a client or on the phone**. Cash flow isn't limited to what happens in the salon.",
    },
    process: {
      eyebrow: "How much work is it for you",
      title: "Just 60 minutes of your time.",
      steps: [
        {
          title: "Tell us about your business",
          text: "What you do, what you sell, what you're proud of, and what you expect from the website.",
        },
        {
          title: "You fill in an onboarding form",
          text: "A short form with photos, copy, and info about your business — **fill it in yourself, or we'll go through it together on a call**.",
        },
        {
          title: "We build the complete website",
          text: "Structure, copy, design, forms, and the technical setup — **tailored to your business**.",
        },
        {
          title: "You give feedback",
          text: "You review the proposal and tell us what to adjust.",
        },
        {
          title: "We launch it",
          text: "From day one it represents you and **starts collecting inquiries**.",
        },
      ],
    },
    delivery: {
      eyebrow: "Turnaround speed",
      title: "Standard delivery, or priority RUSH.",
      subtitle:
        "Your website can be live in 7 days if you provide materials, feedback, and domain/DNS access on time. Need it faster? We offer priority delivery.",
      tiers: [
        {
          name: "Standard",
          days: "within 7 days",
          price: "Included",
          badge: null as string | null,
          desc: "The recommended path for most projects — fast, with no compromise on quality.",
        },
        {
          name: "RUSH 48",
          days: "within 48 hours",
          price: "+€280",
          badge: "Priority delivery",
          desc: "Your website live within 48 hours of confirming complete materials. You skip the queue.",
        },
        {
          name: "RUSH 24",
          days: "within 24 hours",
          price: "+€400",
          badge: "Top priority",
          desc: "Your website live within 24 hours of confirming complete materials. For a launch that can't wait.",
        },
      ],
      cta: "Get a free proposal →",
      note: "RUSH delivery requires complete materials upfront — logo, copy, photos, access. Without them we can't guarantee the speed.",
      linkText: "Need a website really fast? Learn more about express website builds →",
    },
    pricing: {
      eyebrow: "Main offer",
      title: "A complete custom business website",
      subtitle:
        "One clear price for a website that does its job — collects inquiries, builds trust, and sells even when you can't.",
      offer: {
        name: "Complete custom business website",
        price: "1 200",
        currency: " €",
        features: [
          "Website structure",
          "Custom design",
          "Copywriting",
          "Desktop, tablet & mobile",
          "Inquiry & contact forms",
          "CTA structure",
          "Basic on-page SEO",
          "Technical setup",
          "Analytics & tracking where it makes sense",
          "Domain & DNS setup",
          "Launch",
          "Necessary integrations",
          "Online vouchers where they make sense",
          "Standard revisions before final launch",
        ],
        paymentSplit: ["50% before we start", "50% after final launch"],
        cta: "Get a free proposal →",
      },
      note: "Scope always depends on the specific project — €1,200 covers a complete business website. For an unusually large project (e.g. an online store with dozens of products), we confirm scope and price upfront, before starting.",
    },
    guaranteeCapacity: {
      eyebrow: "Why you can trust us",
      guarantee: {
        title: "Deadline guarantee",
        text: "If we miss the confirmed launch date for reasons on our side — even by a single day — you get **€200 off**. Another **€200** for every additional week of delay that starts.",
        note: "This guarantee doesn't cover delays caused by the client — e.g. missing materials, feedback, or access.",
      },
      capacity: {
        title: "Maximum 5 projects a month",
        text: "We don't mass-produce websites. To keep both speed and quality, we only take on a **limited number of new projects** each month.",
      },
    },
    vouchers: {
      eyebrow: "Online vouchers",
      title: "Your website has no opening hours. It works around the clock.",
      subtitle:
        "For beauty, head spa, wellness, massage, experience gifts and similar services, we can connect gift voucher sales directly to your website.",
      steps: ["Customer picks a voucher", "Pays online", "Receives it automatically"],
      proof: "That's exactly how it works on the Élysée Garden website — **4 vouchers sold in the first month alone**.",
      proofLink: "See the results ↑",
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What clients say",
      subtitle: "A few words from people we've worked with.",
      reviews: [
        {
          quote:
            "I'm happy with Lukáš. He helped me nail every last detail of the website exactly the way I pictured it, and even built a landing page for our campaign within two working days. Thanks to the new website, I now sell vouchers online and get new hairdressing inquiries. I recommend him.",
          author: "M. Stavařová — Élysée Garden Studio",
          image: "/portfolio/elysee-garden-stavarova.jpg",
          alt: "Owner of Élysée Garden Studio",
        },
        {
          quote:
            "I recommend webinho — they helped me put together a landing page for my campaign in no time, with full setup of Meta Pixel, Google Tag, and a payment gateway. I was very happy with the result.",
          author: "David Kittel, EFA",
          image: "/portfolio/kittel-consult.jpg",
          alt: "Financial advisor David Kittel's website",
        },
        {
          quote:
            "Lukáš helped me build my website exactly how I imagined it, in a short time and down to the last detail. I recommend him!",
          author: "Petr Pustelník — Pustelník Coach",
          image: "/portfolio/pustelnik-coach.jpg",
          alt: "Pustelník Coach website",
        },
        {
          quote:
            "I can only recommend the guys from webinho. They helped us build a website for our game reserve, and we're already planning to build another one soon.",
          author: "Miloš Malucha — Obora Víno",
          image: "/portfolio/obora-vino.jpg",
          alt: "Obora Víno website",
        },
        {
          quote:
            "I've known Lukáš for a while, and when I needed a new website, I knew exactly who to call. 10/10.",
          author: "Didaprax",
          image: "/portfolio/didaprax.jpg",
          alt: "Didaprax website",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "What else would you like to know",
      subtitle: "Answers to the most common questions about inquiries, pricing, and the technical side.",
      items: [
        {
          question: "Is the inquiry non-binding?",
          answer:
            "**Yes, both the inquiry and the initial proposal are completely non-binding.** Tell us about your business, we'll put together a proposal — and only then do you decide.",
        },
        {
          question: "What exactly do I get for €1,200?",
          answer:
            "**A complete custom business website** — structure, custom design, copywriting, forms, basic SEO, technical setup, domain connection, and launch. Scope depends on the specific project, but the price is clear from the start.",
        },
        {
          question: "How does RUSH 48 and RUSH 24 work?",
          answer:
            "When it's urgent, we can launch your website **within 48 or 24 hours** of confirming complete materials (+€280 or +€400). It's priority delivery, not a shortcut on quality.",
        },
        {
          question: "What if you miss the agreed launch date?",
          answer:
            "We guarantee it. If we miss the date on our side, you get **€200 off** — and another €200 for every additional week of delay that starts.",
        },
        {
          question: "Why do you only take 5 new projects a month?",
          answer:
            "To **keep both speed and quality**. We'd rather do fewer projects properly than a lot of projects in a rush.",
        },
        {
          question: "Can you sell online vouchers?",
          answer:
            "Yes — mainly for beauty, head spa, wellness, massage, and experience-gift services. The customer **picks a voucher, pays online, and receives it automatically**.",
        },
        {
          question: "Will customers find me on Google?",
          answer:
            "Yes, **every website we build includes basic SEO** from the start, so people can find you.",
        },
        {
          question: "Can you connect Google Analytics or Meta Pixel?",
          answer:
            "Yes, **we can connect GA4, Google Tag, and Meta Pixel** — as well as a payment gateway or automated email sending.",
        },
        {
          question: "Will I have full control over my website?",
          answer: "Yes, **the website and domain remain yours** — you own them even after handover.",
        },
      ],
    },
    contactForm: {
      eyebrow: "Contact",
      title: "No-obligation inquiry",
      subtitle:
        "Go through three quick steps and tell us your vision for the website. We'll get back to you and put together **a custom proposal — price comes only after that**. The whole thing is non-binding.",
      steps: ["Project type", "About your business", "Contact"],
      successTitle: "Thanks for your inquiry",
      successText:
        "We'll get back to you as soon as possible to sort out the details. Based on that, we'll prepare a no-obligation custom proposal.",
      step0Title: "What do you need?",
      projectTypes: [
        { id: "Nový web", label: "New website" },
        { id: "Redesign", label: "Redesign" },
      ],
      step1Title: "A few words about your business",
      fieldObor: "Industry *",
      fieldOborPlaceholder: "Café, financial advisor, online store...",
      fieldWebUrl: "Link to your current website",
      optional: "(optional)",
      fieldWebUrlPlaceholder: "https://yourcompany.com",
      fieldMaWeb: "Do you already have a website?",
      yes: "Yes",
      no: "No",
      back: "Back",
      continueLabel: "Continue →",
      step2Title: "Contact details",
      fieldJmeno: "Name *",
      fieldEmail: "Email *",
      fieldTelefon: "Phone *",
      fieldTelefonPlaceholder: "123 456 789",
      fieldRush: "I'm interested in RUSH delivery (website in 24–48 hours)",
      fieldZprava: "Message",
      fieldZpravaPlaceholder: "Anything else we should know.",
      sending: "Sending…",
      submit: "Send inquiry",
      errorText: "Something went wrong. Please try again, or email us directly.",
    },
    proposalCta: {
      eyebrow: "No-obligation inquiry",
      title: "Want this kind of website for your business too?",
      subtitle:
        "Tell us what your business is about. We'll **put together a complete custom website — you'll know the €1,200 price from day one**.",
      cta: "Get a free proposal →",
      ctaSecondary: "Book a short call",
    },
    proposalPage: {
      back: "← Back to webinho.cz",
      badge: "Free and non-binding",
      title1: "A website proposal",
      title2: "for your business.",
      subtitle:
        "It only takes a few minutes — go through three quick steps and tell us your vision. We'll get back to you with a no-obligation custom proposal, price comes only after that.",
      checks: ["Free and non-binding", "Reply within 24–48 hours", "Proposal tailored to your business"],
      portfolioLink: "I'd like to see your work first ↓",
    },
    footer: {
      tagline: "A complete business website that works for you around the clock.",
      contact: "Get a free proposal →",
      terms: "Terms & Conditions",
      privacy: "Privacy Policy",
      cookieSettings: "Cookie settings",
      rights: "All rights reserved.",
    },
    cookieConsent: {
      text: "We use cookies to run the website and measure traffic. More in our",
      linkText: "privacy policy",
      essential: "Essential only",
      acceptAll: "Accept all",
    },
    legal: {
      terms: {
        title: "Terms & Conditions",
        subtitle: "Applicable to services provided through webinho.cz.",
        badge: "Draft — complaints terms still to be added",
        sections: [
          {
            heading: "1. Provider",
            body: "**Lukáš Přibyla**, Company ID (IČO): 23565667, registered address Hrnčířská 124/9, Opava, Czech Republic, a sole trader operating under the Czech Trade Licensing Act (not registered in the Commercial Register), contact email: info@webinho.cz (the \"Provider\").",
          },
          {
            heading: "2. Scope of service",
            body: "Based on an inquiry submitted through webinho.cz, the Provider prepares a non-binding proposal for a web presence (design, structure, and approximate scope). The final price and execution of the order are always agreed with the customer in advance, based on the prepared proposal.",
          },
          {
            heading: "3. Non-binding inquiry and proposal",
            body: "Submitting the inquiry form or receiving the initial proposal does not create any contractual obligation for the customer. Cooperation and invoicing only begin once both parties have agreed on scope and price.",
          },
          {
            heading: "4. Price and payment terms",
            body: "The price for a complete custom business website is 29,990 CZK (approx. €1,200); the exact scope depends on the project and is always confirmed before work begins. **Payment is split into two parts: 50% before work starts and 50% after the website's final launch.** Express delivery (RUSH 48 / RUSH 24) carries a surcharge of 7,000 CZK or 10,000 CZK respectively, and requires complete materials submitted in advance. If the Provider misses the confirmed launch date, the customer is entitled to a 5,000 CZK discount, plus another 5,000 CZK for every additional week of delay that starts; this guarantee does not cover delays caused by the customer (e.g. missing materials, feedback, or access).",
          },
          {
            heading: "5. Complaints and liability",
            body: "[TO BE ADDED, per the Provider's specific terms.]",
          },
          {
            heading: "6. Final provisions",
            body: "These terms are governed by the laws of the Czech Republic. The Provider reserves the right to amend these terms within a reasonable scope.",
          },
        ],
      },
      privacy: {
        title: "Privacy Policy",
        subtitle: "Personal data processing policy (GDPR) for webinho.cz.",
        sections: [
          {
            heading: "1. Data controller",
            body: "The data controller is **Lukáš Přibyla**, Company ID (IČO): 23565667, registered address Hrnčířská 124/9, Opava, Czech Republic, contact email: info@webinho.cz (the \"Controller\").",
          },
          {
            heading: "2. What data we process",
            body: "When you submit the inquiry form, we process the name, email, phone number, and message content you voluntarily provide. This data is used solely so we can get back to you and prepare a non-binding website proposal.",
          },
          {
            heading: "3. Cookies and traffic measurement",
            body: "The website uses essential technical cookies to function. We also use **Google Analytics 4** to measure traffic — these cookies **only load after your consent** in the cookie banner, which you can withdraw at any time via the \"Cookie settings\" button in the footer. We plan to add Meta Pixel in the future (measuring and targeting ad campaigns on Facebook and Instagram) — we'll update this page once it's active.",
          },
          {
            heading: "4. Retention period and your rights",
            body: "We keep inquiry-form data for as long as necessary to handle the inquiry and any resulting cooperation. **You have the right to access, correct, delete, restrict the processing of, and port your data.** Send requests to info@webinho.cz.",
          },
          {
            heading: "5. Recipients of data",
            body: "We process form data through the Resend email service to deliver inquiries. Google processes traffic data from Google Analytics 4 (once you've consented to cookies). Once Meta Pixel is deployed, we'll add information about that processing too.",
          },
        ],
      },
    },
  },
};

export type Dictionary = typeof dictionary.cs;
