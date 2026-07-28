// This template requires the Embla Auto Scroll plugin:
// npm install embla-carousel-auto-scroll

"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  name: string;
  src: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
}

const Logos3 = ({ heading, logos = [] }: Logos3Props) => {
  // duplicate so the auto-scroll loop feels continuous even with few logos
  const items = [...logos, ...logos];

  return (
    <section className="bg-surface py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {heading && (
          <p className="text-center text-xs font-semibold tracking-wide text-ink-soft">
            {heading}
          </p>
        )}
        <div className="relative mx-auto mt-8 w-full min-w-0">
          <Carousel
            className="min-w-0"
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 0.6 })]}
          >
            <CarouselContent className="ml-0">
              {items.map((logo, i) => (
                <CarouselItem
                  key={`${logo.id}-${i}`}
                  className="flex basis-1/2 justify-center pl-4 sm:basis-1/3 md:basis-1/4"
                >
                  <div className="flex h-20 w-40 shrink-0 items-center justify-center rounded-2xl bg-white/95 p-4 shadow-[0_10px_25px_-10px_rgba(0,0,0,0.4)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-surface to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-surface to-transparent" />
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
