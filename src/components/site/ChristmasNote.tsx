"use client";

import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

// Christmas is the strongest season for gift vouchers. After this date a launch
// before Christmas is no longer realistic (setup takes up to two weeks), so the
// note hides itself instead of going stale.
const SHOW_UNTIL = new Date("2026-12-08T00:00:00+01:00").getTime();

const subscribe = () => () => {};

export default function ChristmasNote({ className }: { className?: string }) {
  // the page is static, so the date is checked in the browser, not at build time
  const show = useSyncExternalStore(subscribe, () => Date.now() < SHOW_UNTIL, () => false);
  if (!show) return null;

  return (
    <p className={cn("flex items-start gap-3 text-[16px] font-semibold leading-snug text-ink lg:text-[17px]", className)}>
      <span aria-hidden className="mt-[0.45em] h-2 w-2 shrink-0 rounded-full bg-blue" />
      Před Vánoci se poukazů prodá nejvíc. Když se ozvete teď, poběží vám to ještě před svátky.
    </p>
  );
}
