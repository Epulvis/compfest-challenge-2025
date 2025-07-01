import { Card, CardContent } from "@/components/ui/card";

export default function ServicesSection() {
  const services = [
    {
      title: "Kustomisasi Menu",
      description: "Sesuaikan setiap makanan dengan kebutuhan diet, preferensi, dan tujuan kesehatan Anda.",
      icon: "🍽️"
    },
    {
      title: "Pengiriman Nasional",
      description: "Kami mengantarkan makanan segar siap saji ke semua kota besar di seluruh Indonesia.",
      icon: "🚚"
    },
    {
      title: "Info Nutrisi Detail",
      description: "Akses data gizi lengkap untuk setiap makanan agar tetap sesuai dengan program diet Anda.",
      icon: "🔍"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Layanan Utama Kami
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="bg-amber-950 text-white hover:bg-amber-800 transition-colors duration-300 transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-amber-100 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};