import ContactSection from "./components/Contact";
import HeroSection from "./components/Hero";
import PhilosophySection from "./components/PhilosophySection";
import ServicesProductsSection from "./components/Services";

export default function Home() {
  return (
    <div className="bg-white text-black ">
      <HeroSection />
      <PhilosophySection />
      <ServicesProductsSection />
      <ContactSection />
    </div>
  );
}
