import Link from "next/link";
import { Compass } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="flex-1 bg-bg py-40">
        <div className="mx-auto max-w-xl px-6 text-center lg:px-8">
          <div className="glow-blue mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-soft text-blue">
            <Compass className="h-7 w-7" strokeWidth={2} />
          </div>
          <p className="mt-6 font-heading text-6xl font-extrabold tracking-tight text-gradient-ink">
            404
          </p>
          <h1 className="mt-3 font-heading text-2xl font-bold text-ink sm:text-3xl">
            Tuhle stránku jsme nenašli
          </h1>
          <p className="mt-3 text-sm text-ink-soft">
            Možná byla přesunuta, nebo jste si jen překlepli v adrese. Zkuste se vrátit na hlavní
            stránku.
          </p>
          <Link
            href="/"
            className="gradient-ink mt-8 inline-flex rounded-xl px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_-12px_rgba(91,110,245,0.6)] transition-transform hover:scale-[1.03]"
          >
            Zpět na web →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
