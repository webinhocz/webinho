"use client";

import Logo from "./Logo";
import { useLocale } from "@/lib/i18n";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/webinho.cz", label: "Facebook", Icon: FacebookIcon },
  { href: "https://www.instagram.com/webinho.cz", label: "Instagram", Icon: InstagramIcon },
];

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="border-t border-line bg-surface py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center lg:px-8">
        <Logo className="h-9" />
        <p className="max-w-md text-sm text-ink-soft">{t.footer.tagline}</p>
        <a href="/navrh-webu" className="text-sm font-medium text-blue">
          {t.footer.contact}
        </a>
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="glass flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:text-ink"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
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
