import Navbar    from "@/components/Navbar";
import Hero      from "@/components/Hero";
import StatsBar  from "@/components/StatsBar";
import AboutUs   from "@/components/AboutUs";
import Programs  from "@/components/Programs";
import CTABand   from "@/components/CTABand";
import Footer    from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <AboutUs />
      <Programs />
      <CTABand />
      <Footer />
    </main>
  );
}
