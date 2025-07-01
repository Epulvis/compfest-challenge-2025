import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="pt-[64px] relative min-h-[80vh] bg-[url(/bg.png)] bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 flex items-center justify-center">
      <div className="absolute inset-0 backdrop-blur-sm bg-white/30 "></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
          SEA Catering
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 italic">
          "Healthy Meals, Anytime, Anywhere"
        </p>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Selamat datang di SEA Catering! Kami menyediakan paket makanan sehat dan 
          lezat yang bisa disesuaikan sepenuhnya, diantar langsung ke depan pintu Anda di 
          seluruh Indonesia.
        </p>
        <Button 
          size="lg" 
          className="bg-amber-800 hover:bg-amber-950 text-white px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          <Link href="/menu">Lihat Pilihan Menu</Link>
        </Button>
      </div>
    </section>
  );
}