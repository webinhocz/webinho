import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import Container from "@/components/site/Container";
import { PrimaryButton } from "@/components/site/Button";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="flex-1 py-40">
        <Container className="max-w-2xl text-center">
          <p className="text-6xl font-bold tracking-[-0.03em] text-blue">404</p>
          <h1 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">Tuhle stránku jsme nenašli</h1>
          <p className="mt-3 text-[16px] text-ink-soft">
            Možná byla přesunuta, nebo jste se překlepli v adrese.
          </p>
          <PrimaryButton href="/" className="mt-8">
            Zpět na hlavní stránku
          </PrimaryButton>
        </Container>
      </main>
      <Footer />
    </>
  );
}
