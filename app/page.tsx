import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Realisations from "@/components/Realisations";
import Services from "@/components/Services";
import Partenaires from "@/components/Partenaires";
import Garanties from "@/components/Garanties";
import Methode from "@/components/Methode";
import VehiculePret from "@/components/VehiculePret";
import Equipe from "@/components/Equipe";
import Avis from "@/components/Avis";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Realisations />
      <Services />
      <Partenaires />
      <Garanties />
      <Methode />
      <VehiculePret />
      <Equipe />
      <Avis />
      <Contact />
      <Footer />
    </>
  );
}
