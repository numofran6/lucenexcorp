import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reputation from "@/components/Reputation";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reputation />
        <Stats />
        <Services />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
