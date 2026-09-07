import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CostOfInaction from "@/components/CostOfInaction";
import Portfolio from "@/components/Portfolio";
import WhatYouGet from "@/components/WhatYouGet";
import ElyseeResults from "@/components/ElyseeResults";
import Process from "@/components/Process";
import Delivery from "@/components/Delivery";
import Pricing from "@/components/Pricing";
import GuaranteeCapacity from "@/components/GuaranteeCapacity";
import Vouchers from "@/components/Vouchers";
import OurStory from "@/components/OurStory";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ProposalCta from "@/components/ProposalCta";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Reveal>
          <CostOfInaction />
        </Reveal>
        <Reveal>
          <ElyseeResults />
        </Reveal>
        <Reveal>
          <Portfolio />
        </Reveal>
        <Reveal>
          <WhatYouGet />
        </Reveal>
        <Reveal>
          <Process />
        </Reveal>
        <Reveal>
          <Delivery />
        </Reveal>
        <Reveal>
          <Pricing />
        </Reveal>
        <Reveal>
          <GuaranteeCapacity />
        </Reveal>
        <Reveal>
          <Vouchers />
        </Reveal>
        <Reveal>
          <OurStory />
        </Reveal>
        <Reveal>
          <Team />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <FAQ />
        </Reveal>
        <Reveal>
          <ProposalCta />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
