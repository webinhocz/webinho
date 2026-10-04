import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "./Container";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { WORK } from "@/lib/content";

const PROJECTS = [
  { name: "Élysée Garden", result: "40 000+ Kč z poukazů za 3 měsíce", href: "/pripadove-studie/elysee-garden", img: "/portfolio/hero/elysee.jpg", internal: true },
  { name: "Obora Víno", result: "Focení, video, dron a první poptávka", href: "https://oboravino.cz", img: "/portfolio/hero/obora.jpg" },
  { name: "Kittel Consult", result: "30+ prodaných digitálních produktů", href: "https://detektorpasti.cz", img: "/portfolio/hero/detektor.jpg" },
  { name: "Didaprax", result: "První poptávky i mimo sezónu", href: "https://didaprax.cz", img: "/portfolio/hero/didaprax.jpg" },
  { name: "OA a SOŠL Opava", result: "Chování návštěvníků měříme v Clarity", href: "https://naobchodku.cz", img: "/portfolio/hero/naobchodku.jpg" },
  { name: "Full Service Europe", result: "Web s finančními kalkulačkami", href: "https://fse.cz", img: "/portfolio/hero/fse.jpg" },
];

export default function Work() {
  return (
    <section id="prace" className="pb-[88px] lg:pb-32">
      <Container>
        <Reveal>
          <SectionHeader label={WORK.label} title={WORK.title} lead={WORK.lead} />
          <p className="mt-2 text-[15px] text-ink-faint xl:hidden">{WORK.swipe}</p>
        </Reveal>
      </Container>

      {/* below xl the row scrolls sideways, so the page itself stays short */}
      <div className="mt-10 overflow-x-auto [scrollbar-width:none] lg:mt-12 xl:overflow-visible [&::-webkit-scrollbar]:hidden">
        <Container className="flex w-max snap-x snap-mandatory gap-4 xl:grid xl:w-full xl:grid-cols-6 xl:gap-5">
          {PROJECTS.map((p) => {
            const card = (
              <>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-card)] bg-surface ring-1 ring-line">
                  <Image
                    src={p.img}
                    alt={`Web ${p.name}`}
                    fill
                    sizes="(min-width: 1280px) 16vw, 240px"
                    className={`object-cover object-left-top transition-transform duration-500 ease-out group-hover:scale-[1.04]`}
                  />
                </div>
                <div className="mt-3 flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="truncate text-[15px] font-bold text-ink">{p.name}</h3>
                    <p className="mt-0.5 text-sm leading-snug text-ink-soft">{p.result}</p>
                  </div>
                  <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-ink-soft transition-colors group-hover:text-ink" strokeWidth={2} />
                </div>
              </>
            );
            const cls = "group block w-[260px] shrink-0 snap-start xl:w-auto";
            return p.internal ? (
              <Link key={p.name} href={p.href} className={cls}>
                {card}
              </Link>
            ) : (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className={cls} aria-label={`${p.name}, ${WORK.more}`}>
                {card}
              </a>
            );
          })}
        </Container>
      </div>
    </section>
  );
}
