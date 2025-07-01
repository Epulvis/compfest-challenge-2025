"use client";

import React, { useState } from 'react';
import MealPlanCard from '@/components/atoms/MealPlanCard';
import MealPlanModal from '@/components/atoms/MealPlanModal';

const mealPlans = [
  {
    id: '1',
    name: 'Paket Sehat Harian',
    price: 'Rp. 75.000/hari',
    description: 'Paket lengkap dengan menu seimbang untuk kebutuhan harian Anda. Cocok untuk pekerja aktif yang mengutamakan gizi seimbang.',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80',
    detailedDescription: 'Paket Sehat Harian dirancang khusus untuk memenuhi kebutuhan nutrisi harian dengan komposisi yang seimbang. Menu ini terdiri dari nasi merah, protein berkualitas tinggi, sayuran segar, dan buah-buahan. Sangat cocok untuk pekerja aktif, mahasiswa, atau siapa saja yang ingin menjaga pola makan sehat tanpa repot memasak.',
    nutrition: {
      kalori: '450 kkal',
      protein: '25 gr',
      karbo: '50 gr',
      lemak: '15 gr'
    }
  },
  {
    id: '2',
    name: 'Paket Diet Premium',
    price: 'Rp. 95.000/hari',
    description: 'Menu khusus diet dengan kalori terkontrol dan nutrisi optimal. Ideal untuk program penurunan berat badan yang sehat.',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80',
    detailedDescription: 'Paket Diet Premium adalah solusi tepat untuk Anda yang sedang menjalani program penurunan berat badan. Dengan kalori yang dikontrol ketat namun tetap memenuhi kebutuhan nutrisi, menu ini menggunakan bahan-bahan premium seperti quinoa, salmon, sayuran organik, dan protein nabati berkualitas tinggi.',
    nutrition: {
      kalori: '350 kkal',
      protein: '30 gr',
      karbo: '35 gr',
      lemak: '12 gr'
    }
  },
  {
    id: '3',
    name: 'Paket Keluarga',
    price: 'Rp. 180.000/hari',
    description: 'Paket ekonomis untuk 4 porsi dengan variasi menu yang lezat. Hemat dan praktis untuk kebutuhan keluarga.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    detailedDescription: 'Paket Keluarga menyediakan 4 porsi makanan lengkap dengan menu yang bervariasi setiap harinya. Cocok untuk keluarga kecil yang ingin menikmati makanan sehat tanpa harus repot berbelanja dan memasak. Menu disusun dengan mempertimbangkan selera keluarga Indonesia dengan sentuhan modern.',
    nutrition: {
      kalori: '500 kkal',
      protein: '28 gr',
      karbo: '60 gr',
      lemak: '18 gr'
    }
  },
  {
    id: '4',
    name: 'Paket Vegetarian',
    price: 'Rp. 65.000/hari',
    description: 'Menu berbasis nabati dengan protein lengkap dari tahu, tempe, dan kacang-kacangan. Cocok untuk vegetarian dan vegan.',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80',
    detailedDescription: 'Paket Vegetarian menghadirkan kelezatan menu nabati dengan protein lengkap dari berbagai sumber seperti tahu, tempe, kacang-kacangan, dan biji-bijian. Setiap menu dirancang untuk memastikan Anda mendapatkan semua nutrisi penting tanpa produk hewani. Ideal untuk vegetarian, vegan, atau siapa saja yang ingin mengurangi konsumsi daging.',
    nutrition: {
      kalori: '400 kkal',
      protein: '20 gr',
      karbo: '55 gr',
      lemak: '14 gr'
    }
  },
  {
    id: '5',
    name: 'Paket Executive',
    price: 'Rp. 125.000/hari',
    description: 'Menu premium dengan bahan-bahan berkualitas tinggi. Tersaji dengan kemasan elegant untuk profesional.',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80',
    detailedDescription: 'Paket Executive adalah pilihan premium untuk para profesional yang mengutamakan kualitas dan presentasi. Menggunakan bahan-bahan premium seperti daging sapi pilihan, ikan segar, sayuran organik, dan beras premium. Dikemas dalam kemasan elegant yang cocok untuk meeting atau acara bisnis.',
    nutrition: {
      kalori: '550 kkal',
      protein: '35 gr',
      karbo: '45 gr',
      lemak: '22 gr'
    }
  },
  {
    id: '6',
    name: 'Paket Student',
    price: 'Rp. 45.000/hari',
    description: 'Paket ekonomis untuk mahasiswa dengan nutrisi lengkap. Harga terjangkau tanpa mengorbankan kualitas.',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80',
    detailedDescription: 'Paket Student dirancang khusus untuk para mahasiswa dengan budget terbatas namun tetap membutuhkan asupan nutrisi yang baik. Menu sederhana namun bergizi dengan porsi yang cukup untuk menunjang aktivitas belajar. Harga yang sangat terjangkau menjadikan paket ini pilihan terbaik untuk mahasiswa.',
    nutrition: {
      kalori: '420 kkal',
      protein: '22 gr',
      karbo: '58 gr',
      lemak: '16 gr'
    }
  }
];

const Index = () => {
  const [selectedMealPlan, setSelectedMealPlan] = useState<typeof mealPlans[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (id: string) => {
    const mealPlan = mealPlans.find(plan => plan.id === id);
    if (mealPlan) {
      setSelectedMealPlan(mealPlan);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMealPlan(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Paket Makanan Kami
          </h1>
          <div className="w-24 h-1 bg-sky-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilih paket makanan sehat yang sesuai dengan kebutuhan dan gaya hidup Anda. 
            Semua menu disiapkan dengan bahan-bahan segar dan berkualitas tinggi.
          </p>
        </div>
      </div>

      {/* Meal Plans Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mealPlans.map((mealPlan) => (
            <MealPlanCard
              key={mealPlan.id}
              id={mealPlan.id}
              name={mealPlan.name}
              price={mealPlan.price}
              description={mealPlan.description}
              image={mealPlan.image}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <MealPlanModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        mealPlan={selectedMealPlan}
      />
    </div>
  );
};

export default Index;