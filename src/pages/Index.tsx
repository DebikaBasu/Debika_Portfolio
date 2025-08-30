import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
// import TechStack from "@/components/TechStack";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import DevOpsSection from "@/components/DevOpsSection";
// import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      {/* <TechStack /> */}
      <ExperienceSection />
      <ProjectsSection />
      <DevOpsSection />
      {/* <BlogSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
