import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";
import About from "@/components/About";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <ImageSlider />
      <About />
      <Services />
      <Solutions />
      <Process />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
