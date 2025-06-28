import Icon from "@/components/atoms/Icon";
import Card from "@/components/atoms/Card";
import HeroSection from "@/components/molecules/HeroSection"

export default function Home() {
  return (
    <div className="p-4">
        <HeroSection/>

        {/* Key Features Section */}
        <section className="py-16 bg-white rounded-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Layanan Utama Kami
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center p-4">
            <Card className="bg-[#633A08]">
              <h3 className="text-xl font-semibold mb-2">Kustomisasi Menu</h3>
              <Icon iconName="dinner_dining" className="text-xl p-4" />
              <p className="mt-2 text-gray-300">Sesuaikan setiap makanan dengan kebutuhan diet, preferensi, dan tujuan kesehatan Anda.</p>
            </Card>
            <Card className="bg-[#633A08]">
              <h3 className="text-xl font-semibold mb-2">Pengiriman Nasional</h3>
              <Icon iconName="delivery_truck_speed" className="text-xl p-4" />
              <p className="mt-2 text-gray-300">Kami mengantarkan makanan segar siap saji ke semua kota besar di seluruh Indonesia.</p>
            </Card>
            <Card className="bg-[#633A08]">
              <h3 className="text-xl font-semibold mb-2">Info Nutrisi Detail</h3>
              <Icon iconName="search" className="text-xl p-4" />
              <p className="mt-2 text-gray-300">Akses data gizi lengkap untuk setiap makanan agar tetap sesuai dengan program diet Anda.</p>
            </Card>
          </div>
        </section>

        {/* Contact Details Section */}
        <section className="text-center py-20">
            <h2 className="text-3xl font-bold text-center text-gray-800">
                Have Questions?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
                Our manager is ready to assist you with any inquiries.
            </p>
            <div className="mt-6">
                <p className="text-md text-gray-800"><strong>Manager:</strong> Brian</p>
                <p className="text-md text-gray-800"><strong>Phone Number:</strong> 08123456789</p>
            </div>
        </section>
    </div>
  );
}