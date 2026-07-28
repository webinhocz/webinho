const TEAM = [
  { name: "Lukáš Přibyla", role: "CEO" },
  { name: "Petr Boček", role: "Specialista na tvorbu webu" },
];

export default function Team() {
  return (
    <section id="tym" className="bg-bg py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">
            Kdo za tím stojí
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Tým webinho
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 sm:max-w-xl">
          {TEAM.map((person) => (
            <div key={person.name} className="glass overflow-hidden rounded-[1.75rem]">
              <div className="flex aspect-[4/5] items-center justify-center border-b border-line bg-blue-soft/40 text-sm font-medium text-ink-soft">
                foto brzy
              </div>
              <div className="p-6 text-center">
                <h3 className="font-heading text-lg font-bold text-ink">{person.name}</h3>
                <span className="text-sm font-semibold text-blue">{person.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
