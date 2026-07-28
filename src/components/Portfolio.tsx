"use client";

import { CLIENTS } from "@/lib/clients";

const ROTATIONS = [-7, 4, -3, 6, -5, 3, -2, 5];

export default function Portfolio() {
  return (
    <section id="portfolio" className="overflow-hidden bg-bg py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">Portfolio</span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Weby, které jsme vytvořili
          </h2>
          <p className="mt-3 text-sm text-ink-soft">Klikněte na kartu a otevřete si živý web.</p>
        </div>
      </div>

      <div className="mt-16 overflow-x-auto px-6 pb-10 [-ms-overflow-style:none] [scrollbar-width:none] lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
        <div className="mx-auto flex w-max items-center gap-0 lg:w-full lg:max-w-6xl lg:flex-wrap lg:justify-center lg:gap-y-12">
          {CLIENTS.map((c, i) => (
            <a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative shrink-0"
              style={{
                marginLeft: i === 0 ? 0 : "-2.75rem",
                zIndex: i,
              }}
            >
              <div
                className="glass-strong relative h-72 w-52 overflow-hidden rounded-[1.5rem] shadow-[0_20px_45px_-20px_rgba(0,0,0,0.6)] transition-all duration-300 ease-out group-hover:z-50 group-hover:-translate-y-4 group-hover:scale-[1.06] group-hover:rotate-0 group-hover:glow-blue"
                style={{ transform: `rotate(${ROTATIONS[i % ROTATIONS.length]}deg)` }}
              >
                {c.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={c.photo}
                    alt={c.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center p-6"
                    style={{ background: c.bg }}
                  >
                    <div className="w-full max-w-[160px] rounded-xl bg-black/10 p-3 backdrop-blur-sm">
                      <div className="mb-2 flex gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-white/40" />
                        <span className="h-2 w-2 rounded-full bg-white/40" />
                        <span className="h-2 w-2 rounded-full bg-white/40" />
                      </div>
                      <div className="h-2 w-3/4 rounded" style={{ background: c.accent }} />
                      <div className="mt-2 h-1.5 w-1/2 rounded bg-white/30" />
                      <div className="mt-1.5 h-1.5 w-2/3 rounded bg-white/20" />
                    </div>
                  </div>
                )}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-4 pt-10">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-white/70">
                    {c.category}
                  </span>
                  <h3 className="font-heading text-sm font-bold text-white">{c.name}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
