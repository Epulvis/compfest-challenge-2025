"use client"

import { useState } from "react";
import TestimonialForm from "../molecules/TestimonialForm";
import TestimonialCarousel from "../molecules/TestimonialCarousel";

interface Testimonial {
  name: string;
  message: string;
  rating: number;
}

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  const handleNewTestimonial = (testimonial: Testimonial) => {
    setTestimonials(prev => [...prev, testimonial]);
  };

  return (
    <section id="testimonials" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Hear from our satisfied customers across Indonesia
          </p>
        </div>

        <div className="mb-16">
          <TestimonialCarousel testimonials={testimonials} />
        </div>

        <div>
          <TestimonialForm onSubmit={handleNewTestimonial} />
        </div>
      </div>
    </section>
  );
};