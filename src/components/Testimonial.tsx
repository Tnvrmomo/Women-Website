// filepath: src/components/Testimonial.tsx
import React from 'react';

const testimonials = [
  {
    id: 1,
    text: "I absolutely love these products! They have transformed my skin.",
    name: "Jane Doe",
  },
  {
    id: 2,
    text: "I couldn't be happier with the results. Highly recommend!",
    name: "Mary Smith",
  },
  {
    id: 3,
    text: "These products are amazing. My skin has never looked better.",
    name: "Sarah Johnson",
  },
];

const Testimonial = () => {
  return (
    <div className="bg-white py-8">
      <h2 className="text-center text-2xl font-bold mb-6">#BEAUTYBESTIE SPEAKS</h2>
      <div className="flex justify-center space-x-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="max-w-xs p-4 border rounded-lg shadow-md">
            <p className="text-center italic">"{testimonial.text}"</p>
            <p className="text-center mt-4 font-semibold">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;