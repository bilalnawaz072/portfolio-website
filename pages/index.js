import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Layout from "@/components/Layout";
import PortfolioSection from "@/components/PortfolioSection";


export default function Home() {
  return (
    <>
      <Layout>
      <HeroSection 
      title="Hey There 👋 I am" 
      description="Muhammad Bilal" 
      descriptionDetail="Professional Full Stack Developer " 
      buttonName="Contact Me"/>

      <AboutSection 
      pageName='About Me'
      description={`Whether a medieval typesetter chose to garble a well-known but
        non Biblical—that would have been sacrilegious text, or whether a
        quirk in the 1914 Loeb Edition inspired a graphic designer, it is
        admittedly an odd way for Cicero to sail into the 21st century.`}
      project1=' Built on Tailwind CSS v3.0'
      projectDetail={`Startup generator offers a valid Bootstrap page and
      automatically writes the semantic HTML code of the template.
    `}

      />
      <PortfolioSection />
      <ContactSection />
    </Layout>  
    </>
  )
}
