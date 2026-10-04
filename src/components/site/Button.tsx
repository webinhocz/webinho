import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const primary =
  "inline-flex h-12 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-control)] bg-blue px-6 text-[15px] font-semibold text-ink transition-colors duration-200 hover:bg-blue-hover disabled:cursor-not-allowed disabled:opacity-60";

export function PrimaryButton({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link href={href} onClick={onClick} className={cn(primary, className)}>
      {children}
    </Link>
  );
}

export function SubmitButton({
  children,
  disabled,
  className,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}) {
  return (
    <button type="submit" disabled={disabled} className={cn(primary, className)}>
      {children}
    </button>
  );
}

export function TextLink({
  href,
  children,
  className,
  external,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  const cls = cn(
    "group inline-flex items-center gap-2 text-[15px] font-semibold text-ink underline decoration-line decoration-1 underline-offset-[6px] transition-colors hover:decoration-ink",
    className
  );
  const content = (
    <>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={2} />
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {content}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
