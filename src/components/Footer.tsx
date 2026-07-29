import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center lg:px-8">
        <Logo className="text-xl" />
        <p className="max-w-md text-sm text-ink-soft">
          Digitální vizitka vašeho byznysu, která mluví za vás.
        </p>
        <a href="#kontakt" className="text-sm font-medium text-blue">
          Napište nám →
        </a>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-ink-soft">
          <a href="/obchodni-podminky" className="transition-colors hover:text-ink">
            Obchodní podmínky
          </a>
          <a href="/ochrana-osobnich-udaju" className="transition-colors hover:text-ink">
            Ochrana osobních údajů
          </a>
          <button
            type="button"
            data-cookie-settings
            className="transition-colors hover:text-ink"
          >
            Nastavení cookies
          </button>
        </div>
        <p className="text-xs text-ink-soft">© {new Date().getFullYear()} Webinho. Všechna práva vyhrazena.</p>
      </div>
    </footer>
  );
}
