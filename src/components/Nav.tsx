"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale } from "@/lib/i18n";

export default function Nav() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "glass bg-bg/70 border-b border-line shadow-[0_1px_0_0_rgba(255,255,255,0.04)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" onClick={() => setOpen(false)}>
          <Logo className="h-7 sm:h-8" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {t.nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <LanguageSwitcher className="hidden sm:flex" />
          <a
            href="#kontakt"
            className="gradient-ink hidden shrink-0 rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_-6px_rgba(58,77,232,0.5)] transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            {t.nav.cta}
          </a>

          <button
            type="button"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
            className="glass flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-ink sm:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass border-t border-line px-6 py-6 sm:hidden">
          <div className="flex flex-col gap-5">
            {t.nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <LanguageSwitcher />
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="gradient-ink mt-2 rounded-xl px-5 py-3 text-center text-sm font-semibold text-white"
            >
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
