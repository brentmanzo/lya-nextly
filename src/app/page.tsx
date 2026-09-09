import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import {
  benefitOne,
  benefitTwo,
  airFilterServices,
  hvacServices,
} from "@/components/data";
import Services from "@/components/Services";
export default function Home() {
  return (
    <Container className="pt-0">
      <Hero />
      <div id="company" className="scroll-mt-32">
        <SectionTitle
          // preTitle="LYA Dynamics"
          title="Your trusted partner for air filtration solutions"
        >
          We provide air filtration products, HVAC products, filter
          installation, preventive maintenance, and paintbooth filtration
          services for commercial and industrial facilities.
        </SectionTitle>
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
      </div>

      <div id="services" className="scroll-mt-32">
        <SectionTitle preTitle="Our services" title="What we can do for you">
          <div className="flex flex-col gap-3">
            <span className="section-eyebrow normal-case">
              Cleaner Air. Better Comfort. Reliable HVAC Solutions.
            </span>
            <span className="mt-4">
              At LYA Dynamics, we provide practical HVAC and air filtration
              solutions designed to help businesses maintain cleaner air,
              comfortable working environments, and reliable equipment
              performance.
            </span>
          </div>
        </SectionTitle>
        <div className="section-eyebrow normal-case items-center"></div>

        {/* PROMO VIDEO */}
        {/* <Video videoId="4P_4wMF38aU" /> */}
        <Services
          title={airFilterServices.title}
          items={airFilterServices.items}
        />
        <Services title={hvacServices.title} items={hvacServices.items} />
      </div>

      {/* <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials /> */}

      <div id="faq" className="scroll-mt-32">
        <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
          Answer your customers possible questions here, it will increase the
          conversion rate as well as support or chat requests.
        </SectionTitle>

        <Faq />
      </div>

      <div id="contact" className="scroll-mt-32">
        <Cta />
      </div>
    </Container>
  );
}
