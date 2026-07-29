"use client";

import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";
import { useLocale } from "@/lib/i18n";

const STORAGE_KEY = "webinho_cookie_consent";

export type CookieConsentValue = "all" | "essential";

export default function CookieConsent() {
  const { t } = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    setVisible(!stored);

    const openSettings = () => setVisible(true);
    const handleClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.closest("[data-cookie-settings]")) {
        openSettings();
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  function choose(value: CookieConsentValue) {
    window.localStorage.setItem(STORAGE_KEY, value);
    window.dispatchEvent(new CustomEvent("webinho:cookie-consent", { detail: value }));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6">
      <div className="glass-strong mx-auto flex max-w-2xl flex-col gap-4 rounded-[1.5rem] p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="glow-blue mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-soft text-blue">
            <Cookie className="h-4.5 w-4.5" strokeWidth={2} />
          </div>
          <p className="text-sm leading-relaxed text-ink-soft">
            {t.cookieConsent.text}{" "}
            <a href="/ochrana-osobnich-udaju" className="font-medium text-blue underline underline-offset-2">
              {t.cookieConsent.linkText}
            </a>
            .
          </p>
        </div>
        <div className="flex shrink-0 gap-2.5 sm:flex-col md:flex-row">
          <button
            type="button"
            onClick={() => choose("essential")}
            className="glass flex-1 rounded-xl px-4 py-2.5 text-sm font-semibold text-ink-soft transition-colors hover:text-ink sm:flex-none"
          >
            {t.cookieConsent.essential}
          </button>
          <button
            type="button"
            onClick={() => choose("all")}
            className="gradient-ink flex-1 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] sm:flex-none"
          >
            {t.cookieConsent.acceptAll}
          </button>
        </div>
      </div>
    </div>
  );
}
