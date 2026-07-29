import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Integrations from "@/components/Integrations";
import OurStory from "@/components/OurStory";
import Portfolio from "@/components/Portfolio";
import BeforeAfter from "@/components/BeforeAfter";
import ElyseeResults from "@/components/ElyseeResults";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
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
          <Portfolio />
        </Reveal>
        <Reveal>
          <BeforeAfter />
        </Reveal>
        <Reveal>
          <ElyseeResults />
        </Reveal>
        <Reveal>
          <ValueProps />
        </Reveal>
        <Reveal>
          <Integrations />
        </Reveal>
        <Reveal>
          <OurStory />
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
          <FAQ />
        </Reveal>
        <Reveal>
          <ContactForm />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
