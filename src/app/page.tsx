import Footer from "@/components/molecules/Footer";
import HeroSection from "@/components/molecules/HeroSection"
import ServicesSection from "@/components/molecules/ServicesSection"
import TestimonialsSection from "@/components/organisms/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <ServicesSection/>
      <TestimonialsSection/>
      <Footer/>
    </>
  );
}