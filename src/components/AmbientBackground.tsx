export default function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 60% at 50% -10%, rgba(91,110,245,0.10), transparent 60%)",
        }}
      />
      <div className="absolute -left-[10%] top-[5%] h-[30rem] w-[30rem] rounded-full bg-blue/15 blur-[60px]" />
      <div className="absolute right-[-8%] top-[38%] h-[26rem] w-[26rem] rounded-full bg-violet/15 blur-[60px]" />
      <div className="absolute left-1/3 bottom-[8%] h-[22rem] w-[22rem] rounded-full bg-blue/10 blur-[60px]" />
    </div>
  );
}
