import { FAQSection, type FAQItem } from "@/components/ui/faq-section-shadcnui";

const FAQS: FAQItem[] = [
  {
    question: "Je poptávka nezávazná?",
    answer: (
      <>
        <strong className="font-semibold text-ink">Ano, poptávka i úvodní návrh jsou zcela nezávazné.</strong>{" "}
        Cenu řešíme až po odsouhlasení návrhu.
      </>
    ),
  },
  {
    question: "Jak dlouho trvá tvorba webu?",
    answer: (
      <>
        Podle rozsahu obvykle <strong className="font-semibold text-ink">2–4 týdny</strong> od odsouhlasení
        návrhu po spuštění.
      </>
    ),
  },
  {
    question: "Kolik bude web stát?",
    answer: (
      <>
        Cena se odvíjí od rozsahu — <strong className="font-semibold text-ink">orientační rozpětí najdete v ceníku</strong>,
        finální částku vždy potvrdíme předem.
      </>
    ),
  },
  {
    question: "Najdou mě zákazníci na Googlu?",
    answer: (
      <>
        Ano, <strong className="font-semibold text-ink">každý web stavíme se základním SEO</strong> už od
        začátku, ať vás lidé najdou na Googlu i Seznamu.
      </>
    ),
  },
  {
    question: "Umíte napojit Google Analytics nebo Meta Pixel?",
    answer: (
      <>
        Ano, <strong className="font-semibold text-ink">GA4, Google Tag i Meta Pixel dokážeme napojit</strong>{" "}
        — stejně tak platební bránu nebo automatické zasílání e-mailů.
      </>
    ),
  },
  {
    question: "Budu mít web pod vlastní kontrolou?",
    answer: (
      <>
        Ano, <strong className="font-semibold text-ink">web i doména zůstávají vaše</strong> — vlastníte je i
        po předání.
      </>
    ),
  },
];

export default function FAQ() {
  return (
    <section className="bg-bg py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FAQSection
          eyebrow="Časté otázky"
          heading="Co byste ještě chtěli vědět"
          subheading="Odpovědi na nejčastější otázky k poptávce, ceně i technickému zázemí."
          faqs={FAQS}
        />
      </div>
    </section>
  );
}
