// app/page.js
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductSection />
      <AboutSection />
    </main>
  );
}
