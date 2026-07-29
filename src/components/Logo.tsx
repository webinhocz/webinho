/* eslint-disable @next/next/no-img-element */
export default function Logo({ className = "h-6" }: { className?: string }) {
  return (
    <img
      src="/brand/webinho-logo-white.png"
      alt="webinho"
      className={`w-auto ${className}`}
    />
  );
}
