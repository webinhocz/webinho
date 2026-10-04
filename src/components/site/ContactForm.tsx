"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { SubmitButton } from "./Button";
import DialCodeSelect from "./DialCodeSelect";
import { CONTACT, CONTACT_SECTION, SERVICES } from "@/lib/content";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

const f = CONTACT_SECTION.form;

const input =
  "h-12 w-full rounded-[var(--radius-control)] bg-ink/[0.05] px-4 text-[16px] text-ink ring-1 ring-line transition-shadow placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-blue";

function Required() {
  return (
    <span aria-hidden className="ml-0.5 text-blue">
      *
    </span>
  );
}

function Label({
  htmlFor,
  children,
  optional,
  required,
}: {
  htmlFor?: string;
  children: React.ReactNode;
  optional?: boolean;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-ink">
      {children}
      {required && <Required />}
      {optional && <span className="ml-1.5 font-normal text-ink-faint">({f.optional})</span>}
    </label>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [service, setService] = useState("");
  const [urgent, setUrgent] = useState(false);
  const [dialCode, setDialCode] = useState("+420");
  const successRef = useRef<HTMLDivElement>(null);

  // the success message is much shorter than the form, so bring it into view
  useEffect(() => {
    if (status === "success") successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [status]);
  const [invalid, setInvalid] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    if (!data.jmeno?.trim() || !data.telefon?.trim() || !service) {
      setInvalid(true);
      return;
    }
    setInvalid(false);
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, telefon: `${dialCode} ${data.telefon.trim()}`, sluzba: service, urgentni: urgent }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("success");
      form.reset();
      setService("");
      setUrgent(false);
      setDialCode("+420");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div ref={successRef} role="status" className="flex min-h-[420px] flex-col items-start justify-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue text-ink">
          <Check className="h-6 w-6" strokeWidth={2.5} />
        </span>
        <p className="mt-6 text-2xl font-bold text-ink">{f.successTitle}</p>
        <p className="mt-3 max-w-[40ch] text-[16px] leading-relaxed text-ink-soft">{f.successText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6">
      <div className="grid gap-6 xl:grid-cols-2">
        <div>
          <Label htmlFor="jmeno" required>
            {f.name}
          </Label>
          <input id="jmeno" name="jmeno" autoComplete="name" required aria-required="true" className={input} />
        </div>
        <div>
          <Label htmlFor="telefon" required>
            {f.phone}
          </Label>
          <div className="flex gap-2">
            <DialCodeSelect value={dialCode} onChange={setDialCode} label={f.dialCode} />
            <input
              id="telefon"
              name="telefon"
              type="tel"
              inputMode="tel"
              autoComplete="tel-national"
              placeholder="777 123 456"
              required
              aria-required="true"
              className={cn(input, "min-w-0 flex-1")}
            />
          </div>
        </div>
      </div>

      <fieldset>
        <legend className="mb-3 block text-sm font-semibold text-ink">
          {f.service}
          <Required />
        </legend>
        <div className="flex flex-wrap gap-2.5">
          {SERVICES.map((s) => {
            const active = service === s;
            return (
              <label
                key={s}
                className={cn(
                  "relative inline-flex h-11 cursor-pointer items-center gap-2 rounded-full px-5 text-[15px] font-medium ring-1 transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-blue",
                  active ? "bg-blue text-ink ring-blue" : "bg-ink/[0.05] text-ink-soft ring-line hover:text-ink"
                )}
              >
                <input
                  type="radio"
                  name="sluzba_volba"
                  value={s}
                  checked={active}
                  onChange={() => setService(s)}
                  className="sr-only"
                />
                {active && <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden />}
                {s}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div>
        <Label htmlFor="email" optional>
          {f.email}
        </Label>
        <input id="email" name="email" type="email" autoComplete="email" className={input} />
      </div>

      <div>
        <Label htmlFor="zprava" optional>
          {f.message}
        </Label>
        <textarea
          id="zprava"
          name="zprava"
          rows={3}
          placeholder={f.messagePlaceholder}
          className={cn(input, "h-auto resize-none py-3 leading-relaxed")}
        />
      </div>

      <label className="group flex w-fit cursor-pointer items-center gap-3">
        <input type="checkbox" checked={urgent} onChange={(e) => setUrgent(e.target.checked)} className="peer sr-only" />
        <span
          aria-hidden
          className={cn(
            "flex h-6 w-6 items-center justify-center rounded-[7px] ring-1 transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-blue",
            urgent ? "bg-blue ring-blue" : "bg-ink/[0.05] ring-line group-hover:ring-ink-faint"
          )}
        >
          {urgent && <Check className="h-4 w-4 text-ink" strokeWidth={3} />}
        </span>
        <span className="text-[15px] text-ink">
          <span className="font-semibold">{f.urgent}</span>
          <span className="text-ink-soft">, {f.urgentHint.toLowerCase()}</span>
          <span className="ml-1.5 text-ink-faint">({f.optional})</span>
        </span>
      </label>

      {/* honeypot */}
      <input type="text" name="web" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      {invalid && (
        <p role="alert" className="text-sm font-medium text-[#ff8a8a]">
          {f.required}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-[#ff8a8a]">
          {f.error}{" "}
          <a href={`mailto:${CONTACT.email}`} className="underline">
            {CONTACT.email}
          </a>
          .
        </p>
      )}

      <p className="-mt-2 text-sm text-ink-faint">
        <span className="text-blue">*</span> {CONTACT_SECTION.requiredNote}
      </p>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        <SubmitButton disabled={status === "loading"} className="h-14 px-8 text-base">
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> {f.sending}
            </>
          ) : (
            f.submit
          )}
        </SubmitButton>
        <p className="text-sm text-ink-faint">
          {f.consent}{" "}
          <a href="/ochrana-osobnich-udaju" className="underline underline-offset-2 hover:text-ink">
            {f.privacy}
          </a>
        </p>
      </div>
    </form>
  );
}
