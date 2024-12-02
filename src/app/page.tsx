import {
  About,
  Footer,
  GraduateSection,
  HeaderSection,
  JourneySection,
  PartnerSection,
  SupportSection,
} from "@/components";
import React from "react";

export default function Home() {
  return (
    <main>
      <HeaderSection />
      <About />
      <JourneySection />
      <GraduateSection />
      <SupportSection />
      <PartnerSection />
      <Footer />
    </main>
  );
}
