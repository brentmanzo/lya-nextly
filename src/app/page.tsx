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
    <Container>
      <Hero />
      <div id="company" className="scroll-mt-32">
        <SectionTitle
          preTitle="LYA Dynamics"
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
          This section is to highlight a promo or demo video of your product.
          Analysts says a landing page with video has 3% more conversion rate.
          So, don&apos;t forget to add one. Just like this.
        </SectionTitle>

        <Video videoId="4P_4wMF38aU" />
        <Services
          title={airFilterServices.title}
          items={airFilterServices.items}
        />
        <Services title={hvacServices.title} items={hvacServices.items} />
      </div>

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials />

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
