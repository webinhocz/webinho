import { cn } from "@/lib/utils";

export default function SectionHeader({
  label,
  title,
  lead,
  className,
  as: Tag = "h2",
}: {
  label: string;
  title: string;
  lead?: string;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="flex items-center gap-2.5 text-sm font-semibold text-ink-soft">
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-blue" />
        {label}
      </p>
      <Tag className="mt-5 text-balance text-[2rem] font-bold leading-[1.1] tracking-[-0.025em] text-ink sm:text-[2.5rem] lg:text-[3.25rem]">
        {title}
      </Tag>
      {lead && <p className="mt-5 max-w-[58ch] text-[17px] leading-relaxed text-ink-soft">{lead}</p>}
    </div>
  );
}
