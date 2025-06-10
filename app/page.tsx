import CallToAcion from "./components/Call";
import ContactSection from "./components/Contact";
import HeroSection from "./components/Hero";
import ImageGallerySection from "./components/ImageGallerySection";
import PhilosophySection from "./components/PhilosophySection";
import ProductHighlightSection from "./components/ProductHighlightSection";
import ServicesProductsSection from "./components/Services";

export default function Home() {
  return (
    <div className="bg-white text-black ">
      <HeroSection />
      <PhilosophySection />
      <ProductHighlightSection />
      <ServicesProductsSection />
      <ImageGallerySection />
      <CallToAcion />
      <ContactSection />
    </div>
  );
}
