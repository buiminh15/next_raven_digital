import dynamic from "next/dynamic";

import {
  Achievement,
  Blog,
  Clients,
  ContactUs,
  Footer,
  Hero,
  OurTeam,
  OurWorks,
  Testimonials,
} from "src/components";
import WhatWeDo from "src/components/WhatWeDo";
const HeaderNoSSR = dynamic(() => import("../components/Header"), {
  ssr: false,
});
export default function Home() {
  return (
    <>
      <HeaderNoSSR />
      <main className=" flex h-screen flex-col gap-8">
        <Hero />
        <WhatWeDo />
        <OurWorks />

        <Achievement />
        <Testimonials />
        <OurTeam />
        <Blog />
        <Clients />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}
