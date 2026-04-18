import { Cursor } from "@/components/afterwork/Cursor";
import { Nav } from "@/components/afterwork/Nav";
import { Hero } from "@/components/afterwork/Hero";
import { Services } from "@/components/afterwork/Services";
import { Portfolio } from "@/components/afterwork/Portfolio";
import { Testimonials } from "@/components/afterwork/Testimonials";
import { FAQ } from "@/components/afterwork/FAQ";
import { About } from "@/components/afterwork/About";
import { Contact, Footer } from "@/components/afterwork/Contact";
import { WhatsAppFloat } from "@/components/afterwork/WhatsAppFloat";

const Index = () => {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Cursor />
      <Nav />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <About />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
