"use client";

import Logo from "./Logo";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-line bg-surface py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center lg:px-8">
        <Logo className="h-9" />
        <p className="max-w-md text-sm text-ink-soft">{t.footer.tagline}</p>
        <a href="#kontakt" className="text-sm font-medium text-blue">
          {t.footer.contact}
        </a>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink-soft">
          <a href="/obchodni-podminky" className="transition-colors hover:text-ink">
            {t.footer.terms}
          </a>
          <a href="/ochrana-osobnich-udaju" className="transition-colors hover:text-ink">
            {t.footer.privacy}
          </a>
          <button type="button" data-cookie-settings className="transition-colors hover:text-ink">
            {t.footer.cookieSettings}
          </button>
        </div>
        <p className="text-xs text-ink-soft">
          © {new Date().getFullYear()} Webinho. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
