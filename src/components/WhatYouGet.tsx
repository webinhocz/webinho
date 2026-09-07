"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BarChart3, CreditCard, Globe, MailCheck, Search, Send, Target } from "lucide-react";
import { useLocale, Rich } from "@/lib/i18n";

const TAB_ICONS = [
  [Globe, Search, Send],
  [BarChart3, Target, CreditCard, MailCheck],
];

export default function WhatYouGet() {
  const { t } = useLocale();
  const [tab, setTab] = useState(0);
  const w = t.whatYouGet;
  const items = w.tabs[tab].items;
  const icons = TAB_ICONS[tab];

  return (
    <section id="o-nas" className="bg-bg py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">
            {w.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {w.title}
          </h2>
          <p className="mt-3 text-base text-ink-soft">{w.subtitle}</p>
        </div>

        <div className="glass mt-8 inline-flex rounded-full p-1">
          {w.tabs.map((tabItem, i) => (
            <button
              key={tabItem.label}
              type="button"
              onClick={() => setTab(i)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                tab === i ? "gradient-ink text-white" : "text-ink-soft hover:text-ink"
              }`}
            >
              {tabItem.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className={`mt-8 grid gap-5 ${tab === 0 ? "sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4"}`}
          >
            {items.map((item, i) => {
              const Icon = icons[i];
              const highlighted = tab === 0 && i === 0;
              return (
                <div
                  key={item.title}
                  className={`rounded-[1.75rem] p-7 transition-transform hover:-translate-y-1 ${
                    highlighted ? "gradient-ink glow-blue text-white" : "glass"
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                      highlighted ? "bg-white/15 text-white" : "bg-blue-soft text-blue"
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 font-heading text-base font-bold">{item.title}</h3>
                  <p className={`mt-2 text-sm leading-relaxed ${highlighted ? "text-white/85" : "text-ink-soft"}`}>
                    <Rich text={item.text} className={highlighted ? "font-semibold" : undefined} />
                  </p>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {tab === 0 && (
          <p className="glass mt-8 max-w-3xl rounded-2xl p-6 text-sm leading-relaxed text-ink-soft">
            <Rich text={w.note} />
          </p>
        )}
      </div>
    </section>
  );
}
