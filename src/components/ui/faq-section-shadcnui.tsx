"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useId, useState } from "react";
import type { ReactNode } from "react";

export interface FAQItem {
  question: string;
  answer: ReactNode;
}

export interface FAQSectionProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  faqs: FAQItem[];
}

export function FAQSection({ eyebrow, heading, subheading, faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        {eyebrow && (
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">
            {eyebrow}
          </span>
        )}
        <div className="mt-3 flex items-center gap-3">
          <span className="glow-blue flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-soft text-blue">
            <HelpCircle className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          </span>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {heading}
          </h2>
        </div>
        {subheading && <p className="mt-3 text-sm text-ink-soft">{subheading}</p>}
      </motion.div>

      <div className="mt-10 space-y-4">
        {faqs.map((faq, index) => {
          const questionId = `${baseId}-question-${index}`;
          const answerId = `${baseId}-answer-${index}`;
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <Card className="glass overflow-hidden rounded-[1.5rem] border-line py-0">
                <CardHeader className="p-0">
                  <motion.button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
                    whileHover={{ x: 2 }}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    id={questionId}
                  >
                    <span className="font-heading text-base font-bold text-ink sm:text-lg">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      aria-hidden="true"
                      className="shrink-0 text-ink-soft"
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </motion.button>
                </CardHeader>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      role="region"
                      id={answerId}
                      aria-labelledby={questionId}
                    >
                      <CardContent className="px-6 pb-6 pt-0">
                        <p className="text-sm leading-relaxed text-ink-soft">{faq.answer}</p>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default FAQSection;
