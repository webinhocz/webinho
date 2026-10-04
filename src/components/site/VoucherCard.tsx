import { cn } from "@/lib/utils";

// Anonymised copy of a real purchase notification from elyseegarden.cz (3. 9. 2026).
const ROWS = [
  ["Poukaz", "Relax (1 500 Kč)"],
  ["Den nákupu", "3. září 2026 v 22:06"],
  ["Zákazník", "V. N."],
  ["Částka", "1 500 Kč"],
];

export default function VoucherCard({ className }: { className?: string }) {
  return (
    <figure
      className={cn(
        "w-full max-w-[340px] rounded-[var(--radius-card)] bg-[#fbf8f1] p-6 text-[#2b2a26] shadow-[0_30px_80px_-24px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#8a8f5e]">Élysée Garden · interní</p>
      <p className="mt-2 text-lg font-bold">Nový prodej poukazu</p>
      <dl className="mt-4 divide-y divide-[#e9e2d0] text-[13px]">
        {ROWS.map(([k, v]) => (
          <div key={k} className="flex items-center justify-between gap-4 py-2">
            <dt className="text-[#6b675c]">{k}</dt>
            <dd className="text-right font-semibold">{v}</dd>
          </div>
        ))}
      </dl>
      <figcaption className="sr-only">Ukázka upozornění na prodej poukazu, anonymizováno</figcaption>
    </figure>
  );
}
