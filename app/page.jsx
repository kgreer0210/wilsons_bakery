// app/page.js
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main className="bg-background max-w-[80%] mx-auto">
      <Hero />
      <AboutSection />
      <ProductSection />
    </main>
  );
}
