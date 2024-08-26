import Bubble from "@/components/Bubble";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Products from "@/components/Products";



export default function Home() {
  return (
   <main className="min-h-screen antialiased bg-grid-black/[0.02]">
    <HeroSection />
    <Products />
    <Bubble />
    <Footer />
   </main>
  );
}
