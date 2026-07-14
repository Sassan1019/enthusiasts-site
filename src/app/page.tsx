import GrainOverlay from "@/components/GrainOverlay";
import ScrollProgress from "@/components/ScrollProgress";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Vision from "@/components/Vision";
import Projects from "@/components/Projects";
import Members from "@/components/Members";
import Bridge from "@/components/Bridge";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ overflowX: "hidden", position: "relative" }}>
      <GrainOverlay />
      <ScrollProgress />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Vision />
        <Projects />
        <Members />
        <Bridge />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
