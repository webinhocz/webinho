import { Check } from "lucide-react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

export default function Hero() {
  return (
    <HeroGeometric
      badge="Pro podnikatele a majitele byznysu"
      title1="Digitální vizitka vašeho byznysu,"
      title2="která mluví za vás."
      subtitle="Najdou vás, ať hledají váš obor, nebo přímo vás. A web vám navíc sám přivádí nové poptávky."
    >
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="#kontakt"
          className="gradient-ink rounded-xl px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_-12px_rgba(91,110,245,0.6)] transition-transform hover:scale-[1.03]"
        >
          Chci nezávaznou nabídku →
        </a>
        <a
          href="#portfolio"
          className="text-sm font-semibold text-ink-soft underline decoration-line underline-offset-4 transition-colors hover:text-ink"
        >
          Ukázky prací ↓
        </a>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium text-ink-soft">
        {["Sbírá poptávky", "Moderní design", "SEO na Googlu i Seznamu"].map((t) => (
          <span key={t} className="inline-flex items-center gap-1.5">
            <Check className="h-4 w-4 text-blue" strokeWidth={2.5} />
            {t}
          </span>
        ))}
      </div>
    </HeroGeometric>
  );
}
