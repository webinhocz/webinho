"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProposalWizard from "@/components/ProposalWizard";
import { useLocale } from "@/lib/i18n";

export default function ProposalPageContent() {
  const { t } = useLocale();
  const p = t.proposalPage;

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.25, 0.4, 0.25, 1] as const },
    }),
  };

  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="relative overflow-hidden pt-36 pb-12 sm:pt-44">
          <div className="absolute inset-0 bg-gradient-to-b from-blue/[0.06] via-transparent to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-2xl px-6 text-center lg:px-8">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-1.5"
            >
              <span className="h-2 w-2 rounded-full bg-violet" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-ink-soft">
                {p.badge}
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl"
            >
              <span className="bg-gradient-to-b from-ink to-ink/80 bg-clip-text text-transparent">
                {p.title1}
              </span>
              <br />
              <span className="text-gradient-ink">{p.title2}</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-soft"
            >
              {p.subtitle}
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-ink-soft"
            >
              {p.checks.map((c) => (
                <span key={c} className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-blue" strokeWidth={2.5} />
                  {c}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="kroky" className="pb-20 sm:pb-28">
          <div className="mx-auto max-w-2xl px-6 lg:px-8">
            <ProposalWizard />
            <div className="mt-8 text-center">
              <Link
                href="/#portfolio"
                className="text-sm font-semibold text-ink-soft underline decoration-line underline-offset-4 transition-colors hover:text-ink"
              >
                {p.portfolioLink}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
