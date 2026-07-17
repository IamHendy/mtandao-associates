import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import Services from "@/components/Services";
import Process from "@/components/Process";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Carousel />
      <Services />
      <Process />
      <News />
      <Contact />
      <Footer />
    </main>
  );
}