"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  CircleHelp,
  Globe,
  RefreshCw,
  ShoppingCart,
} from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const PROJECT_TYPES = [
  { id: "Nový web", label: "Nový web", icon: Globe },
  { id: "Redesign", label: "Redesign", icon: RefreshCw },
  { id: "E-shop", label: "E-shop", icon: ShoppingCart },
  { id: "Nevím", label: "Nevím", icon: CircleHelp },
];

const STEPS = ["Typ projektu", "O byznysu", "Kontakt"];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);

  const [typProjektu, setTypProjektu] = useState("");
  const [obor, setObor] = useState("");
  const [maWeb, setMaWeb] = useState<"ano" | "ne" | "">("");

  function goTo(next: number, dir: number) {
    setDirection(dir);
    setStep(next);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const zprava = [
      data.zprava,
      obor && `Obor podnikání: ${obor}.`,
      maWeb && `Aktuální web: ${maWeb === "ano" ? "ano, ale chce to zlepšit." : "zatím žádný."}`,
    ]
      .filter(Boolean)
      .join(" ");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, typ_projektu: typProjektu, zprava }),
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

  return (
    <section id="kontakt" className="bg-bg py-24">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-gradient-ink">Kontakt</span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Nezávazná poptávka
          </h2>
          <p className="mt-3 text-sm text-ink-soft">
            Projděte tři krátké kroky. Ozveme se s návrhem na míru.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          {STEPS.map((label, i) => (
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
              {i < STEPS.length - 1 && <div className="h-px w-8 bg-line sm:w-14" />}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="perspective-dash relative mt-8">
          {status === "success" ? (
            <div className="glass glow-blue rounded-[1.75rem] p-10 text-center">
              <div className="glow-blue mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-soft text-blue">
                <Check className="h-7 w-7" strokeWidth={2.5} />
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold text-ink">Díky za poptávku</h3>
              <p className="mt-2 text-sm text-ink-soft">Ozveme se co nejdřív.</p>
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
                  <h3 className="font-heading text-lg font-bold text-ink">Co potřebujete?</h3>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {PROJECT_TYPES.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => {
                          setTypProjektu(t.id);
                          goTo(1, 1);
                        }}
                        className={`flex flex-col items-center gap-2 rounded-2xl border p-5 text-sm font-semibold transition-colors ${
                          typProjektu === t.id
                            ? "border-blue bg-blue-soft text-blue"
                            : "border-line bg-bg/40 text-ink-soft hover:text-ink"
                        }`}
                      >
                        <t.icon className="h-6 w-6" strokeWidth={2} />
                        {t.label}
                      </button>
                    ))}
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
                  <h3 className="font-heading text-lg font-bold text-ink">Pár slov o byznysu</h3>
                  <div className="mt-6 flex flex-col gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-ink">Obor podnikání</label>
                      <input
                        value={obor}
                        onChange={(e) => setObor(e.target.value)}
                        placeholder="Kavárna, finanční poradce, e-shop..."
                        className="rounded-xl border border-line bg-black/20 px-4 py-2.5 text-sm text-ink outline-none focus:border-blue"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-ink">Máte už web?</label>
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
                            {v === "ano" ? "Ano" : "Ne"}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => goTo(0, -1)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-soft hover:text-ink"
                    >
                      <ArrowLeft className="h-4 w-4" /> Zpět
                    </button>
                    <button
                      type="button"
                      onClick={() => goTo(2, 1)}
                      className="gradient-ink rounded-xl px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                    >
                      Pokračovat →
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
                  <h3 className="font-heading text-lg font-bold text-ink">Kontaktní údaje</h3>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-ink">Jméno *</label>
                      <input
                        name="jmeno"
                        required
                        className="rounded-xl border border-line bg-black/20 px-4 py-2.5 text-sm text-ink outline-none focus:border-blue"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-ink">E-mail *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="rounded-xl border border-line bg-black/20 px-4 py-2.5 text-sm text-ink outline-none focus:border-blue"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                      <label className="text-sm font-medium text-ink">Telefon</label>
                      <input
                        name="telefon"
                        className="rounded-xl border border-line bg-black/20 px-4 py-2.5 text-sm text-ink outline-none focus:border-blue"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                      <label className="text-sm font-medium text-ink">Zpráva</label>
                      <textarea
                        name="zprava"
                        rows={3}
                        placeholder="Cokoliv, co bychom měli vědět navíc."
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
                      <ArrowLeft className="h-4 w-4" /> Zpět
                    </button>
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="gradient-ink rounded-xl px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] disabled:opacity-60"
                    >
                      {status === "loading" ? "Odesílám…" : "Odeslat poptávku"}
                    </button>
                  </div>

                  {status === "error" && (
                    <p className="mt-4 text-sm font-medium text-red-400">
                      Něco se pokazilo. Zkuste to prosím znovu, nebo napište přímo na e-mail.
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </form>
      </div>
    </section>
  );
}
