"use client";

import { useState } from 'react';
import Modal from 'react-modal';
import MealPlanCard, { Plan } from '../molecules/MealPlanCard';
import Button from '../atoms/Button';

if (typeof window !== 'undefined') {
  Modal.setAppElement(document.body);
}

export default function MenuList({ mealPlans }: { mealPlans: Plan[] }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const handleOpenModal = (plan: Plan) => {
    setSelectedPlan(plan);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setSelectedPlan(null);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mealPlans.map((mealPlan) => (
                <MealPlanCard
                  key={mealPlan.id}
                  plan={mealPlan}
                onDetailsClick={handleOpenModal}
                />
            ))}
        </div>
      </div>

      {/* Logika untuk menampilkan Modal/Pop-up */}
      {selectedPlan && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Detail Paket Makanan"
          className="bg-white rounded-lg shadow-xl p-8 max-w-lg mx-auto mt-20 focus:outline-none"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center"
        >
          <h2 className="text-3xl font-bold mb-4">{selectedPlan.name}</h2>
          <p className="text-xl font-semibold text-blue-600 mb-4">{selectedPlan.price}</p>
          <p className="text-gray-600 mb-6">{selectedPlan.description}</p>
          <Button onClick={handleCloseModal} variant="secondary">Close</Button>
        </Modal>
      )}
    </>
  );
}