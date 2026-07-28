export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline font-heading font-extrabold tracking-tight text-ink ${className}`}>
      web
      <span className="relative mx-[0.02em] inline-block">
        <span
          aria-hidden
          className="absolute left-1/2 top-[0.02em] h-[0.16em] w-[0.16em] -translate-x-1/2 bg-blue"
        />
        ı
      </span>
      nho
    </span>
  );
}
