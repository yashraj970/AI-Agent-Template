import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { LogoCloud } from "@/components/sections/logo-cloud";
import { Features } from "@/components/sections/features";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto">
      <Hero />
      <LogoCloud />
      <Features />
      <Testimonials />
      <Pricing />
      <Faq />
      <Cta />
    </main>
  );
}
