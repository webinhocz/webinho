"use client";

import { FAQSection } from "@/components/ui/faq-section-shadcnui";
import { useLocale, Rich } from "@/lib/i18n";

export default function FAQ() {
  const { t } = useLocale();
  const faqs = t.faq.items.map((item) => ({
    question: item.question,
    answer: <Rich text={item.answer} />,
  }));

  return (
    <section className="bg-bg py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FAQSection
          eyebrow={t.faq.eyebrow}
          heading={t.faq.title}
          subheading={t.faq.subtitle}
          faqs={faqs}
        />
      </div>
    </section>
  );
}
