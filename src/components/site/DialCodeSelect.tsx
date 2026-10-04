"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { DIAL_CODES } from "@/lib/content";
import { cn } from "@/lib/utils";

export default function DialCodeSelect({
  value,
  onChange,
  label,
}: {
  value: string;
  onChange: (code: string) => void;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    listRef.current?.focus();
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  function openList() {
    setActive(Math.max(0, DIAL_CODES.findIndex((d) => d.code === value)));
    setOpen(true);
  }

  function choose(i: number) {
    onChange(DIAL_CODES[i].code);
    setOpen(false);
  }

  function onListKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(DIAL_CODES.length - 1, a + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(0, a - 1));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      choose(active);
    } else if (e.key === "Escape" || e.key === "Tab") {
      setOpen(false);
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${label}: ${value}`}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault();
            openList();
          }
        }}
        className="flex h-12 w-[96px] items-center justify-between gap-1 rounded-[var(--radius-control)] bg-ink/[0.05] px-3.5 text-[16px] text-ink ring-1 ring-line transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-blue"
      >
        {value}
        <ChevronDown className={cn("h-4 w-4 text-ink-soft transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <ul
          ref={listRef}
          role="listbox"
          tabIndex={-1}
          aria-label={label}
          aria-activedescendant={`dial-${active}`}
          onKeyDown={onListKey}
          className="absolute left-0 top-[calc(100%+6px)] z-20 w-60 overflow-hidden rounded-[var(--radius-control)] bg-surface py-1.5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.9)] ring-1 ring-line focus:outline-none"
        >
          {DIAL_CODES.map((d, i) => (
            <li
              key={d.code}
              id={`dial-${i}`}
              role="option"
              aria-selected={d.code === value}
              onMouseEnter={() => setActive(i)}
              onClick={() => choose(i)}
              className={cn(
                "flex cursor-pointer items-center justify-between px-4 py-2.5 text-[15px]",
                i === active ? "bg-ink/[0.07] text-ink" : "text-ink-soft"
              )}
            >
              <span>
                <span className="inline-block w-12 font-semibold text-ink">{d.code}</span>
                {d.country}
              </span>
              {d.code === value && <Check className="h-4 w-4 text-blue" strokeWidth={2.5} />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
