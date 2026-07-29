"use client";

import { useEffect } from "react";
import { RefreshCw } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Nav />
      <main className="flex-1 bg-bg py-40">
        <div className="mx-auto max-w-xl px-6 text-center lg:px-8">
          <h1 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
            Něco se pokazilo
          </h1>
          <p className="mt-3 text-sm text-ink-soft">
            Zkuste stránku znovu načíst, nebo se ozvěte přímo na e-mail, pokud to nepomůže.
          </p>
          <button
            type="button"
            onClick={reset}
            className="gradient-ink mt-8 inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_-12px_rgba(91,110,245,0.6)] transition-transform hover:scale-[1.03]"
          >
            <RefreshCw className="h-4 w-4" strokeWidth={2.5} />
            Zkusit znovu
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
