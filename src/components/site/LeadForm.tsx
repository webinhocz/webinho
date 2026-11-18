"use client";

import { useEffect, useId, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { SubmitButton } from "./Button";
import DialCodeSelect from "./DialCodeSelect";
import { CONTACT } from "@/lib/content";
import { leadSource, rememberCampaign, trackLead } from "@/lib/tracking";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

const input =
  "h-14 w-full rounded-[var(--radius-control)] bg-ink/[0.05] px-4 text-[16px] text-ink ring-1 ring-line transition-shadow placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-blue";

/**
 * Two-field callback form (name + phone) for ad landing pages.
 * Sends through /api/contact like the full form, with `topic` as the service.
 */
export default function LeadForm({
  topic,
  source,
  submitLabel = "Ozvěte se mi",
  className,
}: {
  topic: string;
  source: string;
  submitLabel?: string;
  className?: string;
}) {
  const uid = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [dialCode, setDialCode] = useState("+420");
  const [problem, setProblem] = useState<"" | "missing" | "phone">("");
  const [name, setName] = useState("");

  useEffect(() => rememberCampaign(), []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const jmeno = data.jmeno?.trim() ?? "";
    const telefon = data.telefon?.trim() ?? "";

    if (!jmeno || !telefon) return setProblem("missing");
    if (telefon.replace(/\D/g, "").length < 9) return setProblem("phone");
    setProblem("");
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jmeno,
          telefon: `${dialCode} ${telefon}`,
          sluzba: topic,
          zdroj: leadSource(source),
          web: data.web,
        }),
      });
      if (!res.ok) throw new Error("send failed");
      trackLead(source);
      setName(jmeno);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className={cn("flex flex-col items-start justify-center py-6", className)}>
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue text-ink">
          <Check className="h-6 w-6" strokeWidth={2.5} />
        </span>
        <p className="mt-6 text-2xl font-bold text-ink">Díky, {name}. Ozvu se do 24 hodin.</p>
        <p className="mt-3 max-w-[40ch] text-[16px] leading-relaxed text-ink-soft">
          Pokud to spěchá, klidně zavolejte na{" "}
          <a href={CONTACT.phoneHref} className="font-medium text-ink underline underline-offset-4">
            {CONTACT.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className={cn("grid gap-5", className)}>
      <div>
        <label htmlFor={`${uid}-jmeno`} className="mb-2 block text-sm font-semibold text-ink">
          Jméno
        </label>
        <input
          id={`${uid}-jmeno`}
          name="jmeno"
          autoComplete="name"
          required
          aria-required="true"
          aria-invalid={problem === "missing" || undefined}
          className={input}
        />
      </div>
      <div>
        <label htmlFor={`${uid}-telefon`} className="mb-2 block text-sm font-semibold text-ink">
          Telefon
        </label>
        <div className="flex gap-2">
          <DialCodeSelect value={dialCode} onChange={setDialCode} label="Předvolba" />
          <input
            id={`${uid}-telefon`}
            name="telefon"
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            placeholder="777 123 456"
            required
            aria-required="true"
            aria-invalid={problem !== "" || undefined}
            className={cn(input, "min-w-0 flex-1")}
          />
        </div>
      </div>

      {/* honeypot */}
      <input type="text" name="web" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      {problem && (
        <p role="alert" className="text-sm font-medium text-[#ff8a8a]">
          {problem === "missing" ? "Vyplňte prosím jméno a telefon." : "Zkontrolujte prosím telefonní číslo."}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-[#ff8a8a]">
          Odeslání se nepovedlo. Zkuste to prosím znovu, nebo zavolejte na{" "}
          <a href={CONTACT.phoneHref} className="underline">
            {CONTACT.phone}
          </a>
          .
        </p>
      )}

      <SubmitButton disabled={status === "loading"} className="h-14 w-full text-base">
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Odesílám…
          </>
        ) : (
          submitLabel
        )}
      </SubmitButton>
      <p className="text-sm leading-relaxed text-ink-faint">
        Nezávazně. Údaje použiji jen k tomu, abych se vám ozval.{" "}
        <a href="/ochrana-osobnich-udaju" className="underline underline-offset-2 hover:text-ink">
          Ochrana osobních údajů
        </a>
      </p>
    </form>
  );
}
