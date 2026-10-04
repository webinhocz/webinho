import Link from "next/link";
import Logo from "@/components/Logo";
import Container from "./Container";
import { CONTACT, FOOTER, NAV } from "@/lib/content";

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

const SOCIAL = [
  { href: "https://www.facebook.com/webinho.cz", label: "Facebook", Icon: FacebookIcon },
  { href: "https://www.instagram.com/webinho.cz", label: "Instagram", Icon: InstagramIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] lg:py-20">
        <div>
          <Logo className="h-8" />
          <p className="mt-5 text-xs font-light uppercase tracking-[0.32em] text-ink-soft">{FOOTER.tagline}</p>
        </div>

        <nav aria-label="Patička" className="flex flex-col gap-3 text-[15px]">
          {NAV.links.map((l) => (
            <Link key={l.href} href={l.href} className="text-ink-soft transition-colors hover:text-ink">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 text-[15px]">
          <a href={`mailto:${CONTACT.email}`} className="text-ink transition-colors hover:text-ink-soft">
            {CONTACT.email}
          </a>
          <a href={CONTACT.phoneHref} className="text-ink transition-colors hover:text-ink-soft">
            {CONTACT.phone}
          </a>
          <div className="mt-2 flex gap-2">
            {SOCIAL.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 text-ink-soft transition-colors hover:text-ink"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </Container>

      <Container className="flex flex-col gap-4 border-t border-line py-6 text-sm text-ink-faint sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Webinho. {FOOTER.rights}
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/obchodni-podminky" className="transition-colors hover:text-ink">
            {FOOTER.terms}
          </Link>
          <Link href="/ochrana-osobnich-udaju" className="transition-colors hover:text-ink">
            {FOOTER.privacy}
          </Link>
          <button type="button" data-cookie-settings className="transition-colors hover:text-ink">
            {FOOTER.cookies}
          </button>
        </div>
      </Container>
    </footer>
  );
}
