import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import ClientLogos from "@/components/site/ClientLogos";
import Why from "@/components/site/Why";
import CaseTeaser from "@/components/site/CaseTeaser";
import Work from "@/components/site/Work";
import Urgency from "@/components/site/Urgency";
import Testimonials from "@/components/site/Testimonials";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <ClientLogos />
        <Why />
        <CaseTeaser />
        <Urgency />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
