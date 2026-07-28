import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import OurStory from "@/components/OurStory";
import Team from "@/components/Team";
import ClientLogos from "@/components/ClientLogos";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Reveal>
          <ValueProps />
        </Reveal>
        <Reveal>
          <OurStory />
        </Reveal>
        <Reveal>
          <Team />
        </Reveal>
        <ClientLogos />
        <Reveal>
          <Portfolio />
        </Reveal>
        <Reveal>
          <Process />
        </Reveal>
        <Reveal>
          <Pricing />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <ContactForm />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
