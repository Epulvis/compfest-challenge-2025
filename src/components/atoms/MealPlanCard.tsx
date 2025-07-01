import React from 'react';

interface MealPlanCardProps {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  onViewDetails: (id: string) => void;
}

const MealPlanCard = ({ id, name, price, description, image, onViewDetails }: MealPlanCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-2xl font-bold text-sky-600 mb-3">{price}</p>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{description}</p>
        
        <button
          onClick={() => onViewDetails(id)}
          className="w-full bg-sky-600 hover:bg-sky-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 hover:shadow-md"
        >
          Lihat Detail Lebih Lanjut
        </button>
      </div>
    </div>
  );
};

export default MealPlanCard;