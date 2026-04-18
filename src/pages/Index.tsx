import { Cursor } from "@/components/afterwork/Cursor";
import { Nav } from "@/components/afterwork/Nav";
import { Hero } from "@/components/afterwork/Hero";
import { Services } from "@/components/afterwork/Services";
import { Portfolio } from "@/components/afterwork/Portfolio";
import { About } from "@/components/afterwork/About";
import { Contact, Footer } from "@/components/afterwork/Contact";

const Index = () => {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Cursor />
      <Nav />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
