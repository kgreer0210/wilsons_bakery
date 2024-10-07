// app/page.js
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import AboutSection from "@/components/AboutSection";
import BacktoTopButton from "@/components/BacktoTopButton";

export default function Home() {
  return (
    <main className="bg-background max-w-[80%] mx-auto scroll-smooth">
      <section id="home">
        <Hero />
      </section>
      <section id="products">
        <ProductSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <BacktoTopButton />
    </main>
  );
}
