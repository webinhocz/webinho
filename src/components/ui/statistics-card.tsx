"use client";

import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export interface GrowthBarItem {
  /** Numeric value used to scale the bar height relative to the tallest item */
  value: number;
  /** What renders inside the value bubble — defaults to an animated NumberFlow of `value` */
  displayValue?: ReactNode;
  suffix?: string;
  label: string;
  sublabel?: string;
}

export interface GrowthBarsProps {
  items: GrowthBarItem[];
  className?: string;
}

const candyStripe = `
.webinho-candy-track {
  background-image: linear-gradient(135deg, rgba(255,255,255,0.07) 25%, transparent 25.5%, transparent 50%, rgba(255,255,255,0.07) 50.5%, rgba(255,255,255,0.07) 75%, transparent 75.5%, transparent);
  background-size: 12px 12px;
}
`;

/** Bars that animate up from the bottom, each topped with a value callout. */
export function GrowthBars({ items, className = "" }: GrowthBarsProps) {
  const max = Math.max(...items.map((i) => i.value));
  // Leave a little headroom above the tallest bar so nothing reads as "maxed out",
  // and use a sqrt scale so smaller-but-still-meaningful values don't look tiny next to it.
  const domainMax = max * 1.15;

  return (
    <div className={`relative flex h-72 w-full items-end justify-center gap-5 sm:gap-8 ${className}`}>
      <style>{candyStripe}</style>
      {items.map((item, index) => {
        const heightPct = Math.min(
          90,
          Math.max(30, (Math.sqrt(item.value) / Math.sqrt(domainMax)) * 100)
        );
        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            className="flex h-full w-full max-w-[8.5rem] flex-col items-center"
          >
            <div className="relative h-full w-full">
              {/* track background — clipped separately so it never masks the value bubble */}
              <div className="webinho-candy-track glass absolute inset-0 overflow-hidden rounded-[1.5rem]" />
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${heightPct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: index * 0.15 + 0.1, type: "spring", damping: 15 }}
                className="gradient-ink glow-blue absolute bottom-0 w-full rounded-[1.5rem]"
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl bg-ink px-3 py-1.5 text-sm font-bold text-bg shadow-[0_10px_25px_-8px_rgba(0,0,0,0.6)]">
                  {item.displayValue ?? <NumberFlow value={item.value} suffix={item.suffix ?? ""} />}
                  <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-ink" />
                </div>
              </motion.div>
            </div>
            <p className="mt-3 text-center text-sm font-semibold text-ink">{item.label}</p>
            {item.sublabel && (
              <p className="text-center text-xs text-ink-soft">{item.sublabel}</p>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

export default GrowthBars;
