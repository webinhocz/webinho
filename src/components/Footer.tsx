import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center lg:px-8">
        <Logo className="text-xl" />
        <p className="max-w-md text-sm text-ink-soft">
          Digitální vizitka vašeho byznisu, která mluví za vás.
        </p>
        <a href="mailto:webinho@seznam.cz" className="text-sm font-medium text-blue">
          webinho@seznam.cz
        </a>
        <p className="text-xs text-ink-soft">© {new Date().getFullYear()} Webinho. Všechna práva vyhrazena.</p>
      </div>
    </footer>
  );
}
