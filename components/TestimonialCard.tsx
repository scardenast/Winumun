
import React from 'react';
import type { Testimonial } from '../types';
import { StarIcon } from './Icons';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg text-center h-full flex flex-col justify-center">
      <div className="flex justify-center my-4">
        {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="w-5 h-5 text-brand-yellow" />
        ))}
      </div>
      <p className="text-gray-600 italic mb-6 flex-grow">"{testimonial.quote}"</p>
      <div className="mt-auto">
        <p className="font-bold text-brand-deep-blue text-lg">{testimonial.author}</p>
        <p className="text-sm text-gray-500">{testimonial.role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
