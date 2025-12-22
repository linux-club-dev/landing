import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnnouncementBanner from "@/components/AnnouncementBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnnouncementBanner
        title="🚀 Hack Days Pune — January 31, 2026"
        subtitle="Mini-hackathon by Linux Club × MLH. Build with Google Gemini API!"
        ctaLabel="Register Now"
        ctaHref="https://events.mlh.io/events/13396-hack-days-pune"
        secondaryCtaLabel="Learn More"
        secondaryCtaHref="/hackdays-pune"
        storageKey="announcement:hackdays-pune-2026"
      />
      <Header />
      <Hero />
      <About />
      <Events />
      <Team />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
