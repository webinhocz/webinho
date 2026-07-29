"use client";

import { useLocale } from "@/lib/i18n";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div className={`glass flex items-center gap-0.5 rounded-full p-1 ${className}`}>
      <button
        type="button"
        onClick={() => setLocale("cs")}
        aria-pressed={locale === "cs"}
        className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-bold transition-colors ${
          locale === "cs" ? "gradient-ink text-white" : "text-ink-soft hover:text-ink"
        }`}
      >
        <span aria-hidden="true">🇨🇿</span> CS
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-bold transition-colors ${
          locale === "en" ? "gradient-ink text-white" : "text-ink-soft hover:text-ink"
        }`}
      >
        <span aria-hidden="true">🇬🇧</span> EN
      </button>
    </div>
  );
}
