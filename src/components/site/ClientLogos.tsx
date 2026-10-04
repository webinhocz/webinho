/* eslint-disable @next/next/no-img-element */
import Container from "./Container";
import { CLIENT_LOGOS } from "@/lib/content";

export default function ClientLogos() {
  const row = [...CLIENT_LOGOS.items, ...CLIENT_LOGOS.items];
  return (
    <section aria-label={CLIENT_LOGOS.label} className="border-y border-line py-10 lg:py-12">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
        <p className="shrink-0 text-sm font-semibold text-ink-soft lg:w-48">{CLIENT_LOGOS.label}</p>
        <div className="marquee-mask relative min-w-0 flex-1 overflow-hidden">
          <ul className="animate-marquee flex w-max items-center hover:[animation-play-state:paused]">
            {row.map((logo, i) => (
              <li key={i} aria-hidden={i >= CLIENT_LOGOS.items.length} className="flex shrink-0 items-center px-8 lg:px-12">
                <img
                  src={logo.src}
                  alt={i < CLIENT_LOGOS.items.length ? logo.alt : ""}
                  style={{ height: logo.h }}
                  className="w-auto max-w-[180px] object-contain opacity-70 transition-opacity hover:opacity-100"
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
