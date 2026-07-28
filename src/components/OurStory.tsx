export default function OurStory() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">
              Náš příběh
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Jak to celé začalo
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              Začalo to jednoduše. V okolí jsme měli známé, kteří potřebovali web.
              Udělali jsme jim dobrou práci a doporučili nás dál. Řekli jsme si,
              že bychom takhle mohli pomoct mnohem víc byznysům. Dnes to bereme
              jako reálnou práci, ne jako brigádu vedle. Pomáháme podnikatelům a
              majitelům firem být vidět na internetu.
            </p>
          </div>
          <div className="glass flex aspect-[4/3] items-center justify-center rounded-[1.75rem] text-sm font-medium text-ink-soft">
            foto brzy
          </div>
        </div>
      </div>
    </section>
  );
}
