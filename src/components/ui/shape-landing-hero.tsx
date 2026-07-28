"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-blue/[0.15]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.12]",
            "shadow-[0_8px_32px_0_rgba(91,110,245,0.15)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  );
}

function HeroGeometric({
  badge,
  title1,
  title2,
  subtitle,
  children,
}: {
  badge?: string;
  title1?: string;
  title2?: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.3 + i * 0.15, ease: [0.25, 0.4, 0.25, 1] },
    }),
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-blue/[0.06] via-transparent to-violet/[0.06] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-blue/[0.18]"
          className="left-[-10%] top-[15%] md:left-[-5%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-violet/[0.18]"
          className="right-[-5%] top-[70%] md:right-[0%] md:top-[75%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet/[0.14]"
          className="bottom-[5%] left-[5%] md:bottom-[10%] md:left-[10%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-blue/[0.16]"
          className="right-[15%] top-[10%] md:right-[20%] md:top-[15%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-violet/[0.14]"
          className="left-[20%] top-[5%] md:left-[25%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 mx-auto w-full px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {badge && (
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-1.5"
            >
              <span className="h-2 w-2 rounded-full bg-violet" />
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-ink-soft">
                {badge}
              </span>
            </motion.div>
          )}

          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="mb-6 font-heading text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-b from-ink to-ink/80 bg-clip-text text-transparent">
                {title1}
              </span>
              <br />
              <span className="text-glow text-gradient-ink">{title2}</span>
            </h1>
          </motion.div>

          {subtitle && (
            <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
              <p className="mx-auto mb-8 max-w-xl px-4 text-base font-light leading-relaxed tracking-wide text-ink-soft sm:text-lg">
                {subtitle}
              </p>
            </motion.div>
          )}

          <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible">
            {children}
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/60" />
    </div>
  );
}

export { HeroGeometric, ElegantShape };
