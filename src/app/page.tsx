import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import WhyJoin from "@/components/WhyJoin";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <About />
      <Stats />
      <WhyJoin />
      <Testimonials />
      <CTA />
      <Contact />
    </div>
  );
}
