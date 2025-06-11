import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NewsSection from "@/components/NewsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ParticipationSection from "@/components/ParticipationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <NewsSection />
        <ProjectsSection />
        <ParticipationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
