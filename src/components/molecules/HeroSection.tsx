import Button from "@/components/atoms/Button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="text-center py-16 h-dvh grid place-items-center content-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                SEA Catering
            </h1>
            <p className="mt-4 text-xl text-gray-600">
                “Healthy Meals, Anytime, Anywhere”
            </p>
            <p className="mt-6 max-w-2xl mx-auto text-gray-500">
                Selamat datang di SEA Catering! Kami menyediakan paket makanan sehat dan lezat yang bisa disesuaikan sepenuhnya, diantar langsung ke depan pintu Anda di seluruh Indonesia.
            </p>
            <div className="mt-8">
            <Link href="/menu">
                <Button size="lg" variant="primary" className="cursor-pointer">
                    Lihat Pilihan Menu
                </Button>
            </Link>
        </div>
    </section>
  );
}