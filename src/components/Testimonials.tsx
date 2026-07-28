"use client";

import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function Testimonials() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">Reference</span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Co říkají klienti
          </h2>
          <p className="mt-3 text-sm text-ink-soft">
            Sbíráme reference od klientů. Brzy je najdete přímo tady.
          </p>
        </div>

        <div className="relative mt-10">
          <Carousel opts={{ align: "start", loop: true }} className="mx-auto max-w-4xl">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, i) => (
                <CarouselItem key={i} className="sm:basis-1/2 lg:basis-1/3">
                  <div className="flex h-full flex-col justify-between rounded-[1.75rem] border border-dashed border-line bg-bg/60 p-7">
                    <div className="flex gap-1 text-amber-300">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-4 text-sm text-ink-soft">Reference brzy doplníme.</p>
                    <div className="mt-6 h-2 w-24 rounded bg-line" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="glass -left-4 border-line text-ink lg:-left-12" />
            <CarouselNext className="glass -right-4 border-line text-ink lg:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
