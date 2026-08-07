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
      cta: "Nezávazná poptávka",
      openMenu: "Otevřít menu",
      closeMenu: "Zavřít menu",
    },
    hero: {
      badge: "Pro podnikatele a majitele byznysu",
      title1: "Digitální vizitka vašeho byznysu,",
      title2: "která mluví za vás.",
      subtitle:
        "Najdou vás, ať hledají váš obor, nebo přímo vás. A web vám navíc sám přivádí nové poptávky.",
      ctaPrimary: "Chci náhled webu →",
      ctaSecondary: "Ukázky prací ↓",
      checks: ["Sběr poptávek", "Moderní design", "SEO na Googlu i Seznamu", "Tracking"],
    },
    valueProps: {
      eyebrow: "Proč webinho",
      title: "Obyčejná vizitka dnes nestačí.",
      subtitle: "Tvoříme moderní webové stránky, které vás reprezentují a přivádí nové zákazníky.",
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
      note: "Ať web zatím nemáte, nebo je zastaralý. **Špatný první dojem odradí zákazníka i od velké firmy se silným kapitálem.** Setkali jsme se s oběma případy a víme, jak to změnit.",
    },
    integrations: {
      eyebrow: "Co umíme napojit navíc",
      title: "Nejen hezký web",
      subtitle: "Weby stavíme tak, aby přinášely data i výsledky, ne jen dobrý dojem.",
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
        { name: "Lukáš Přibyla", role: "CEO" },
        { name: "Petr Boček", role: "Specialista na tvorbu webu" },
      ],
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "Weby, které jsme vytvořili",
      subtitle: "Klikněte na kartu a otevřete si živý web.",
    },
    beforeAfter: {
      eyebrow: "Případová studie — Obora Víno",
      title: "První dojem rozhoduje",
      text: "Pan Malucha měl zastaralý web, který **nesbíral žádné poptávky**. Dnes má web, který **dělá skvělý první dojem** — a už sesbíral svoji první poptávku.",
      before: "Před",
      after: "Po",
      hint: "Přetáhněte posuvník a porovnejte.",
      altBefore: "Původní web Obora Janovská Dolina",
      altAfter: "Nový web Obora Víno od webinho",
    },
    elyseeResults: {
      eyebrow: "Případová studie — Élysée Garden",
      title: "Web, který vydělává i ve spánku",
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
      eyebrow: "Jak to probíhá",
      title: "Od poptávky k hotovému webu",
      steps: [
        {
          title: "Nezávazná poptávka",
          text: "Napíšete nám pár slov o svém byznysu a jak si nový web představujete.",
        },
        {
          title: "Návrh na míru",
          text: "Připravíme orientační návrh designu a struktury podle vašeho oboru — **zatím bez řešení ceny**.",
        },
        {
          title: "Odsouhlasení ceny",
          text: "Podle rozsahu návrhu si spolu **odsouhlasíme finální cenu** a jdeme do toho.",
        },
        {
          title: "Spuštění a poptávky",
          text: "Web dokončíme a nasadíme online. **Od prvního dne vás reprezentuje a sbírá poptávky.**",
        },
      ],
    },
    pricing: {
      eyebrow: "Ceník",
      title: "Balíčky podle rozsahu",
      subtitle: "Každý web je jiný, proto je i cena vždy individuální. Tady jsou orientační rozpětí.",
      recommended: "DOPORUČENO",
      individualBadge: "NA MÍRU",
      cta: "Mám zájem",
      tiers: [
        {
          name: "Start",
          priceFrom: "8 500",
          priceTo: "14 500",
          currency: " Kč",
          desc: "Jednoduchá digitální vizitka pro živnostníky.",
          features: ["One-page web na míru", "Poptávkový formulář", "Základní SEO"],
          highlight: false,
        },
        {
          name: "Business",
          priceFrom: "14 500",
          priceTo: "24 500",
          currency: " Kč",
          desc: "Vícestránkový web pro malé a střední firmy.",
          features: ["Až 5 podstránek", "Poptávkový formulář", "SEO nastavení", "Kompletně custom design"],
          highlight: true,
        },
        {
          name: "Premium",
          individual: true,
          priceFrom: "24 500+",
          currency: " Kč",
          desc: "Web navržený a postavený výhradně pro vás — bez šablon, bez kompromisů. Rozsah i cena se odvíjí od vašich přesných potřeb.",
          features: [
            "Řešení šité přesně na míru",
            "Osobní konzultace nad návrhem",
            "Pokročilé SEO",
            "Prioritní zpracování",
          ],
          highlight: false,
        },
      ],
      note: "Ceny jsou orientační. **Přesnou nabídku vždy šijeme na míru** podle rozsahu a potřeb vašeho byznysu. Primárně tvoříme nové weby jako digitální vizitku s poptávkovým formulářem. Redesign i e-shop dokážeme zrealizovat, řešíme je individuálně podle poptávky.",
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
            "**Ano, poptávka i úvodní návrh jsou zcela nezávazné.** Cenu řešíme až po odsouhlasení návrhu.",
        },
        {
          question: "Jak dlouho trvá tvorba webu?",
          answer: "Podle rozsahu obvykle **2–4 týdny** od odsouhlasení návrhu po spuštění.",
        },
        {
          question: "Kolik bude web stát?",
          answer:
            "Cena se odvíjí od rozsahu — **orientační rozpětí najdete v ceníku**, finální částku vždy potvrdíme předem.",
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
      fieldZprava: "Zpráva",
      fieldZpravaPlaceholder: "Cokoliv, co bychom měli vědět navíc.",
      sending: "Odesílám…",
      submit: "Odeslat poptávku",
      errorText: "Něco se pokazilo. Zkuste to prosím znovu, nebo napište přímo na e-mail.",
    },
    proposalCta: {
      eyebrow: "Nezávazná poptávka",
      title: "Chcete vidět, jak by mohl vypadat váš nový web?",
      subtitle:
        "Projděte tři krátké kroky a řekněte nám svou představu. Připravíme **nezávazný návrh na míru — cenu řešíme až potom**.",
      cta: "Chci návrh webu →",
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
      tagline: "Digitální vizitka vašeho byznysu, která mluví za vás.",
      contact: "Napište nám →",
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
        badge: "Koncept — čeká na doplnění platebních a reklamačních podmínek",
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
            body: "Konečná cena se odvíjí od rozsahu odsouhlaseného návrhu a je vždy potvrzena oběma stranami před zahájením realizace. [DOPLNIT: platební podmínky, splatnost, případná záloha.]",
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
      cta: "Free quote",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      badge: "For entrepreneurs and business owners",
      title1: "The digital business card for your company,",
      title2: "that speaks for you.",
      subtitle:
        "They'll find you — whether they search your industry or your business by name. And your website brings in new leads on its own.",
      ctaPrimary: "Show me a preview →",
      ctaSecondary: "See our work ↓",
      checks: ["Lead generation", "Modern design", "SEO on Google", "Tracking"],
    },
    valueProps: {
      eyebrow: "Why webinho",
      title: "A plain business card isn't enough anymore.",
      subtitle: "We build modern websites that represent your business and bring in new customers.",
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
      note: "Whether you don't have a website yet, or it's outdated. **A bad first impression can turn customers away even from a large, well-funded company.** We've seen both cases, and we know how to fix it.",
    },
    integrations: {
      eyebrow: "What else we can connect",
      title: "More than just a pretty website",
      subtitle: "We build websites to deliver data and results, not just a good impression.",
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
        { name: "Lukáš Přibyla", role: "CEO" },
        { name: "Petr Boček", role: "Web development specialist" },
      ],
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "Websites we've built",
      subtitle: "Click a card to open the live website.",
    },
    beforeAfter: {
      eyebrow: "Case study — Obora Víno",
      title: "First impressions decide",
      text: "Mr. Malucha had an outdated website that **collected zero inquiries**. Today he has a website that **makes a great first impression** — and it's already landed its first inquiry.",
      before: "Before",
      after: "After",
      hint: "Drag the slider to compare.",
      altBefore: "Original Obora Janovská Dolina website",
      altAfter: "New Obora Víno website by webinho",
    },
    elyseeResults: {
      eyebrow: "Case study — Élysée Garden",
      title: "A website that earns money while she sleeps",
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
      eyebrow: "How it works",
      title: "From inquiry to finished website",
      steps: [
        {
          title: "No-obligation inquiry",
          text: "Tell us a bit about your business and how you picture your new website.",
        },
        {
          title: "Custom design proposal",
          text: "We'll put together a rough design and structure proposal for your industry — **with no price discussion yet**.",
        },
        {
          title: "Price agreement",
          text: "Based on the scope of the proposal, we'll **agree on the final price** together and get started.",
        },
        {
          title: "Launch & inquiries",
          text: "We finish the website and launch it live. **From day one, it represents you and starts collecting inquiries.**",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Packages by scope",
      subtitle: "Every website is different, so pricing is always individual. Here are the approximate ranges.",
      recommended: "RECOMMENDED",
      individualBadge: "BESPOKE",
      cta: "I'm interested",
      tiers: [
        {
          name: "Start",
          priceFrom: "400",
          priceTo: "600",
          currency: " €",
          desc: "A simple digital business card for freelancers and sole traders.",
          features: ["Custom one-page website", "Contact form", "Basic SEO"],
          highlight: false,
        },
        {
          name: "Business",
          priceFrom: "600",
          priceTo: "1000",
          currency: " €",
          desc: "A multi-page website for small and medium businesses.",
          features: ["Up to 5 subpages", "Contact form", "SEO setup", "Fully custom design"],
          highlight: true,
        },
        {
          name: "Premium",
          individual: true,
          priceFrom: "1000+",
          currency: " €",
          desc: "A website designed and built exclusively for you — no templates, no compromises. Scope and price are shaped entirely around your exact needs.",
          features: [
            "Solution tailored exactly to you",
            "Personal consultation on the proposal",
            "Advanced SEO",
            "Priority turnaround",
          ],
          highlight: false,
        },
      ],
      note: "Prices are approximate. **We always tailor the exact quote** to the scope and needs of your business. We primarily build new websites as a digital business card with a contact form. We can also handle redesigns and online stores — those are scoped individually.",
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
            "**Yes, both the inquiry and the initial proposal are completely non-binding.** We only discuss price after the proposal is approved.",
        },
        {
          question: "How long does building a website take?",
          answer: "Depending on scope, usually **2–4 weeks** from approving the proposal to launch.",
        },
        {
          question: "How much will the website cost?",
          answer:
            "The price depends on scope — **check the pricing section for approximate ranges** — we always confirm the final amount in advance.",
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
      fieldZprava: "Message",
      fieldZpravaPlaceholder: "Anything else we should know.",
      sending: "Sending…",
      submit: "Send inquiry",
      errorText: "Something went wrong. Please try again, or email us directly.",
    },
    proposalCta: {
      eyebrow: "No-obligation inquiry",
      title: "Want to see what your new website could look like?",
      subtitle:
        "Go through three quick steps and tell us your vision. We'll prepare **a no-obligation custom proposal — price comes only after that**.",
      cta: "Get my website proposal →",
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
      tagline: "The digital business card for your company, that speaks for you.",
      contact: "Get in touch →",
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
        badge: "Draft — payment and complaints terms still to be added",
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
            body: "The final price depends on the scope of the agreed proposal and is always confirmed by both parties before work begins. [TO BE ADDED: payment terms, due dates, any deposit.]",
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
