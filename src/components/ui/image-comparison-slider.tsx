"use client";

import * as React from "react";

export interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  altBefore?: string;
  altAfter?: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function ImageComparison({
  beforeImage,
  afterImage,
  altBefore = "Před",
  altAfter = "Po",
  beforeLabel,
  afterLabel,
  className = "",
}: ImageComparisonProps) {
  const [sliderPosition, setSliderPosition] = React.useState(50);
  const [isDragging, setIsDragging] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMove = React.useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let newPosition = ((clientX - rect.left) / rect.width) * 100;
    newPosition = Math.max(0, Math.min(100, newPosition));
    setSliderPosition(newPosition);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setSliderPosition((p) => Math.max(0, p - 5));
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setSliderPosition((p) => Math.min(100, p + 5));
    }
  };

  React.useEffect(() => {
    const stop = () => setIsDragging(false);
    window.addEventListener("mouseup", stop);
    return () => window.removeEventListener("mouseup", stop);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative aspect-[4/3] w-full max-w-4xl select-none overflow-hidden rounded-[1.5rem] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] sm:aspect-video ${className}`}
      style={{ touchAction: "none" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setIsDragging(false)}
    >
      {/* After image (top layer, clipped) — revealed on the right as the handle moves right */}
      <div
        className="absolute inset-0 h-full w-full overflow-hidden"
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={afterImage}
          alt={altAfter}
          className="h-full w-full object-cover object-left-top"
          draggable={false}
        />
      </div>

      {/* Before image (base layer) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={beforeImage}
        alt={altBefore}
        className="block h-full w-full object-cover object-left-top"
        draggable={false}
      />

      {beforeLabel && (
        <span
          className="glass-strong pointer-events-none absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white"
          style={{ opacity: sliderPosition > 10 ? 1 : 0 }}
        >
          {beforeLabel}
        </span>
      )}
      {afterLabel && (
        <span
          className="gradient-ink pointer-events-none absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white"
          style={{ opacity: sliderPosition < 90 ? 1 : 0 }}
        >
          {afterLabel}
        </span>
      )}

      {/* Handle */}
      <div
        role="slider"
        tabIndex={0}
        aria-label="Porovnat před a po"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        className="absolute bottom-0 top-0 flex w-1 cursor-ew-resize items-center justify-center bg-white/80 outline-none focus-visible:ring-2 focus-visible:ring-blue"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        onKeyDown={handleKeyDown}
      >
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-200 ease-out ${
            isDragging ? "scale-110 shadow-xl" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-ink"
          >
            <line x1="15" y1="18" x2="9" y2="12"></line>
            <line x1="9" y1="6" x2="15" y2="12"></line>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ImageComparison;
