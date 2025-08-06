import CounterSection from "@/components/countersection";
import ParallaxSection from "@/components/parallaxsection";
import Footer from "@/components/footer";
import ScrollLayer from "@/components/ScrollLayer";
import HeroCarousel from "@/components/HeroCarousel";
import AboutPreview from "@/components/aboutpreview";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <ScrollLayer>
        <CounterSection />
        <AboutPreview />
        <ParallaxSection />
        <Footer />
      </ScrollLayer>
    </>
  );
}