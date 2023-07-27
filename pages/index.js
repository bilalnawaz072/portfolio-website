import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Layout from "@/components/Layout";
import PortfolioSection from "@/components/PortfolioSection";


export default function Home() {
  return (
    <>
      <Layout>
      <HeroSection title="Hi, I'm Bilal" />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </Layout>  
    </>
  )
}
