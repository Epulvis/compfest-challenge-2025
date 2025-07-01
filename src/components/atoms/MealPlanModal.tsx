import React from 'react';
import { X } from 'lucide-react';

interface NutritionInfo {
  kalori: string;
  protein: string;
  karbo: string;
  lemak: string;
}

interface MealPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  detailedDescription: string;
  nutrition: NutritionInfo;
}

interface MealPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
  mealPlan: MealPlan | null;
}

const MealPlanModal = ({ isOpen, onClose, mealPlan }: MealPlanModalProps) => {
  if (!isOpen || !mealPlan) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-colors"
        >
          <X size={20} className="text-gray-600" />
        </button>

        {/* Image */}
        <div className="aspect-video w-full overflow-hidden rounded-t-2xl">
          <img 
            src={mealPlan.image} 
            alt={mealPlan.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{mealPlan.name}</h2>
          <p className="text-3xl font-bold text-sky-600 mb-6">{mealPlan.price}</p>
          
          {/* Detailed Description */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Deskripsi</h3>
            <p className="text-gray-600 leading-relaxed">{mealPlan.detailedDescription}</p>
          </div>

          {/* Nutrition Table */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Informasi Nutrisi</h3>
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-sky-600 text-white">
                    <th className="text-left py-3 px-4 font-medium">Komponen</th>
                    <th className="text-left py-3 px-4 font-medium">Jumlah</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">Kalori</td>
                    <td className="py-3 px-4 font-medium text-gray-900">{mealPlan.nutrition.kalori}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">Protein</td>
                    <td className="py-3 px-4 font-medium text-gray-900">{mealPlan.nutrition.protein}</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">Karbohidrat</td>
                    <td className="py-3 px-4 font-medium text-gray-900">{mealPlan.nutrition.karbo}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">Lemak</td>
                    <td className="py-3 px-4 font-medium text-gray-900">{mealPlan.nutrition.lemak}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Tutup
            </button>
            <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlanModal;