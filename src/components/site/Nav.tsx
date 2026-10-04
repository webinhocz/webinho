"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Mail, Menu, Phone, X } from "lucide-react";
import Logo from "@/components/Logo";
import Container from "./Container";
import { PrimaryButton } from "./Button";
import { CONTACT, NAV } from "@/lib/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <Link href="/" onClick={close} aria-label="Webinho, úvodní stránka">
          <Logo className="h-7 lg:h-8" />
        </Link>

        <nav aria-label="Hlavní navigace" className="hidden items-center gap-10 lg:flex">
          {NAV.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <PrimaryButton href="/kontakt" onClick={close} className="h-11 px-4 sm:px-5">
            <span className="sm:hidden">{NAV.ctaShort}</span>
            <span className="hidden sm:inline">{NAV.cta}</span>
          </PrimaryButton>
          <button
            type="button"
            aria-label={open ? NAV.closeMenu : NAV.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-control)] bg-ink/5 text-ink lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="h-[calc(100dvh-72px)] border-t border-line bg-bg lg:hidden">
          <Container className="flex flex-col py-4">
            <nav aria-label="Mobilní navigace" className="flex flex-col">
              {NAV.links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="border-b border-line py-5 text-2xl font-medium text-ink transition-colors hover:text-ink-soft"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-5 text-lg text-ink-soft">
              <a href={CONTACT.phoneHref} className="flex items-center gap-4 hover:text-ink">
                <Phone className="h-5 w-5 text-blue" strokeWidth={2} />
                {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-4 hover:text-ink">
                <Mail className="h-5 w-5 text-blue" strokeWidth={2} />
                {CONTACT.email}
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
