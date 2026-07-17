import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Header from "../components/Header";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}