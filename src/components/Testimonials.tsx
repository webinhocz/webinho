import { ScrollReelTestimonials } from "@/components/ui/scroll-reel-testimonials";

const REVIEWS = [
  {
    quote:
      "Doporučuji webinho, pomohli mi sestavit landing page pro kampaň během chvíle — s kompletním nastavením Meta Pixelu, Google Tagu i platební brány. Byl jsem velmi spokojený.",
    author: "David Kittel, EFA",
    image: "/portfolio/kittel-consult.jpg",
    alt: "Web finančního poradce Davida Kittela",
  },
  {
    quote:
      "Lukáš mi pomohl sestavit můj web podle mých představ během krátké doby a do posledního detailu. Doporučuji!",
    author: "Petr Pustelník — Pustelník Coach",
    image: "/portfolio/pustelnik-coach.jpg",
    alt: "Web Pustelník Coach",
  },
  {
    quote:
      "Kluky z webinha mohu jen doporučit. Pomohli nám sestavit web pro naši oboru a brzy plánujeme udělat další.",
    author: "Miloš Malucha — Obora Víno",
    image: "/portfolio/obora-vino.jpg",
    alt: "Web Obora Víno",
  },
  {
    quote:
      "S Lukášem se známe delší dobu, a když jsem potřeboval nový web, věděl jsem, na koho se obrátit. 10/10.",
    author: "Didaprax",
    image: "/portfolio/didaprax.jpg",
    alt: "Web Didaprax",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">Reference</span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Co říkají klienti
          </h2>
          <p className="mt-3 text-sm text-ink-soft">Pár slov od lidí, se kterými jsme spolupracovali.</p>
        </div>

        <div className="mt-10 flex justify-center">
          <ScrollReelTestimonials testimonials={REVIEWS} />
        </div>
      </div>
    </section>
  );
}
