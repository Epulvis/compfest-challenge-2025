"use client"

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Testimonial {
  name: string;
  message: string;
  rating: number;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const defaultTestimonials: Testimonial[] = [
    {
      name: "Sarah Rahman",
      message: "SEA Catering telah mengubah cara saya makan! Menu yang bisa dikustomisasi sesuai diet saya sangat membantu mencapai target kesehatan.",
      rating: 5
    },
    {
      name: "Ahmad Wijaya",
      message: "Pengiriman selalu tepat waktu dan makanannya selalu segar. Informasi nutrisi yang detail sangat membantu untuk program diet saya.",
      rating: 5
    },
    {
      name: "Maya Sari",
      message: "Pelayanan yang excellent! Tim SEA Catering sangat responsif dan makanannya benar-benar enak dan sehat.",
      rating: 4
    }
  ];

  const allTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

  useEffect(() => {
    if (allTestimonials.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === allTestimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [allTestimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-xl ${i < rating ? "text-yellow-400" : "text-gray-300"}`}>
        ⭐
      </span>
    ));
  };

  if (allTestimonials.length === 0) {
    return (
      <div className="text-center text-gray-600">
        <p>No testimonials yet. Be the first to share your experience!</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-white shadow-lg">
        <CardContent className="p-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              {renderStars(allTestimonials[currentIndex].rating)}
            </div>
            <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
              "{allTestimonials[currentIndex].message}"
            </blockquote>
            <cite className="text-gray-900 font-semibold">
              - {allTestimonials[currentIndex].name}
            </cite>
          </div>
        </CardContent>
      </Card>

      {allTestimonials.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {allTestimonials.map((_, index) => (
            <Button
              key={index}
              variant={index === currentIndex ? "default" : "outline"}
              size="sm"
              className="w-3 h-3 rounded-full p-0"
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};