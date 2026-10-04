"use client";

import { useEffect } from "react";
import { RefreshCw } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";

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
      <main className="flex-1 py-40">
        <div className="mx-auto max-w-xl px-6 text-center lg:px-8">
          <h1 className="text-2xl font-bold text-ink sm:text-3xl">
            Něco se pokazilo
          </h1>
          <p className="mt-3 text-sm text-ink-soft">
            Zkuste stránku znovu načíst, nebo se ozvěte přímo na e-mail, pokud to nepomůže.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-[var(--radius-control)] bg-blue px-6 text-[15px] font-semibold text-ink transition-colors hover:bg-blue-hover"
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
