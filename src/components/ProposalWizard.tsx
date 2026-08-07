"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Check, Globe, RefreshCw } from "lucide-react";
import { useLocale } from "@/lib/i18n";

type Status = "idle" | "loading" | "success" | "error";

const PROJECT_ICONS: Record<string, typeof Globe> = {
  "Nový web": Globe,
  Redesign: RefreshCw,
};

const DIAL_CODES = [
  "+420", "+421", "+48", "+49", "+43", "+44", "+33", "+34",
  "+39", "+31", "+1", "+353", "+41", "+46", "+47", "+45",
];

export default function ProposalWizard() {
  const { t, locale } = useLocale();
  const [status, setStatus] = useState<Status>("idle");
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);

  const [typProjektu, setTypProjektu] = useState("");
  const [obor, setObor] = useState("");
  const [maWeb, setMaWeb] = useState<"ano" | "ne" | "">("");
  const [webUrl, setWebUrl] = useState("");
  const [dialCode, setDialCode] = useState("+420");

  const canContinueStep1 = obor.trim().length > 0 && (typProjektu === "Redesign" || maWeb !== "");

  function goTo(next: number, dir: number) {
    setDirection(dir);
    setStep(next);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (locale === "en" && data.telefon) {
      data.telefon = `${dialCode} ${data.telefon}`;
    }
    const zprava = [
      data.zprava,
      obor && `Obor podnikání: ${obor}.`,
      typProjektu === "Redesign"
        ? webUrl && `Současný web: ${webUrl}.`
        : maWeb && `Aktuální web: ${maWeb === "ano" ? "ano, ale chce to zlepšit." : "zatím žádný."}`,
    ]
      .filter(Boolean)
      .join(" ");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, typ_projektu: typProjektu, zprava, locale }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const variants = {
    enter: (dir: number) => ({ opacity: 0, rotateY: dir > 0 ? 35 : -35, x: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, rotateY: 0, x: 0 },
    exit: (dir: number) => ({ opacity: 0, rotateY: dir > 0 ? -35 : 35, x: dir > 0 ? -40 : 40 }),
  };

  const f = t.contactForm;

  return (
    <div>
      <div className="flex items-center justify-center gap-3">
        {f.steps.map((label, i) => (
          <div key={label} className="flex items-center gap-3">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                i < step
                  ? "gradient-ink text-white"
                  : i === step
                    ? "glow-blue bg-blue-soft text-blue"
                    : "glass text-ink-soft"
              }`}
            >
              {i < step ? <Check className="h-4 w-4" strokeWidth={3} /> : i + 1}
            </div>
            {i < f.steps.length - 1 && <div className="h-px w-8 bg-line sm:w-14" />}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="perspective-dash relative mt-8">
        {status === "success" ? (
          <div className="glass glow-blue rounded-[1.75rem] p-10 text-center">
            <div className="glow-blue mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-soft text-blue">
              <Check className="h-7 w-7" strokeWidth={2.5} />
            </div>
            <h3 className="mt-5 font-heading text-xl font-bold text-ink">{f.successTitle}</h3>
            <p className="mt-2 text-sm text-ink-soft">{f.successText}</p>
          </div>
        ) : (
          <AnimatePresence mode="wait" custom={direction}>
            {step === 0 && (
              <motion.div
                key="step-0"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="glass rounded-[1.75rem] p-8"
                style={{ transformStyle: "preserve-3d" }}
              >
                <h3 className="font-heading text-lg font-bold text-ink">{f.step0Title}</h3>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {f.projectTypes.map((pt) => {
                    const Icon = PROJECT_ICONS[pt.id];
                    return (
                      <button
                        key={pt.id}
                        type="button"
                        onClick={() => {
                          setTypProjektu(pt.id);
                          goTo(1, 1);
                        }}
                        className={`flex flex-col items-center gap-2 rounded-2xl border p-5 text-sm font-semibold transition-colors ${
                          typProjektu === pt.id
                            ? "border-blue bg-blue-soft text-blue"
                            : "border-line bg-bg/40 text-ink-soft hover:text-ink"
                        }`}
                      >
                        <Icon className="h-6 w-6" strokeWidth={2} />
                        {pt.label}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step-1"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="glass rounded-[1.75rem] p-8"
                style={{ transformStyle: "preserve-3d" }}
              >
                <h3 className="font-heading text-lg font-bold text-ink">{f.step1Title}</h3>
                <div className="mt-6 flex flex-col gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-ink">{f.fieldObor}</label>
                    <input
                      value={obor}
                      onChange={(e) => setObor(e.target.value)}
                      placeholder={f.fieldOborPlaceholder}
                      className="rounded-xl border border-line bg-black/20 px-4 py-2.5 text-sm text-ink outline-none focus:border-blue"
                    />
                  </div>
                  {typProjektu === "Redesign" ? (
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-ink">
                        {f.fieldWebUrl} <span className="font-normal text-ink-soft">{f.optional}</span>
                      </label>
                      <input
                        type="url"
                        value={webUrl}
                        onChange={(e) => setWebUrl(e.target.value)}
                        placeholder={f.fieldWebUrlPlaceholder}
                        className="rounded-xl border border-line bg-black/20 px-4 py-2.5 text-sm text-ink outline-none focus:border-blue"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-ink">{f.fieldMaWeb}</label>
                      <div className="flex gap-3">
                        {(["ano", "ne"] as const).map((v) => (
                          <button
                            key={v}
                            type="button"
                            onClick={() => setMaWeb(v)}
                            className={`flex-1 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-colors ${
                              maWeb === v
                                ? "border-blue bg-blue-soft text-blue"
                                : "border-line bg-bg/40 text-ink-soft hover:text-ink"
                            }`}
                          >
                            {v === "ano" ? f.yes : f.no}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => goTo(0, -1)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-soft hover:text-ink"
                  >
                    <ArrowLeft className="h-4 w-4" /> {f.back}
                  </button>
                  <button
                    type="button"
                    disabled={!canContinueStep1}
                    onClick={() => canContinueStep1 && goTo(2, 1)}
                    className="gradient-ink rounded-xl px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
                  >
                    {f.continueLabel}
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step-2"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="glass rounded-[1.75rem] p-8"
                style={{ transformStyle: "preserve-3d" }}
              >
                <h3 className="font-heading text-lg font-bold text-ink">{f.step2Title}</h3>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-ink">{f.fieldJmeno}</label>
                    <input
                      name="jmeno"
                      required
                      className="rounded-xl border border-line bg-black/20 px-4 py-2.5 text-sm text-ink outline-none focus:border-blue"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-ink">{f.fieldEmail}</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="rounded-xl border border-line bg-black/20 px-4 py-2.5 text-sm text-ink outline-none focus:border-blue"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label className="text-sm font-medium text-ink">{f.fieldTelefon}</label>
                    <div className="flex gap-2">
                      {locale === "en" && (
                        <select
                          value={dialCode}
                          onChange={(e) => setDialCode(e.target.value)}
                          aria-label="Dial code"
                          className="rounded-xl border border-line bg-black/20 px-3 py-2.5 text-sm text-ink outline-none focus:border-blue"
                        >
                          {DIAL_CODES.map((code) => (
                            <option key={code} value={code} className="bg-bg">
                              {code}
                            </option>
                          ))}
                        </select>
                      )}
                      <input
                        type="tel"
                        name="telefon"
                        required
                        pattern="[0-9 ]{6,14}"
                        placeholder={f.fieldTelefonPlaceholder}
                        className="flex-1 rounded-xl border border-line bg-black/20 px-4 py-2.5 text-sm text-ink outline-none focus:border-blue"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label className="text-sm font-medium text-ink">{f.fieldZprava}</label>
                    <textarea
                      name="zprava"
                      rows={3}
                      placeholder={f.fieldZpravaPlaceholder}
                      className="rounded-xl border border-line bg-black/20 px-4 py-2.5 text-sm text-ink outline-none focus:border-blue"
                    />
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => goTo(1, -1)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-soft hover:text-ink"
                  >
                    <ArrowLeft className="h-4 w-4" /> {f.back}
                  </button>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="gradient-ink rounded-xl px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] disabled:opacity-60"
                  >
                    {status === "loading" ? f.sending : f.submit}
                  </button>
                </div>

                {status === "error" && (
                  <p className="mt-4 text-sm font-medium text-red-400">{f.errorText}</p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </form>
    </div>
  );
}
