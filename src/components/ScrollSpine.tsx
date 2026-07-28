"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollSpine() {
  const { scrollYProgress } = useScroll();

  return (
    <div aria-hidden className="pointer-events-none fixed inset-y-0 left-1/2 -z-10 hidden w-px lg:block">
      <div className="absolute inset-0 bg-line" />
      <motion.div
        style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
        className="absolute inset-0 gradient-ink"
      />
    </div>
  );
}
