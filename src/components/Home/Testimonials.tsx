import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers about their experience working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-10 left-0 opacity-20">
            <Quote size={80} className="text-blue-300" />
          </div>

          <div className="bg-blue-800 rounded-lg p-8 md:p-12 shadow-xl relative z-10">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  index === activeIndex ? 'block opacity-100' : 'hidden opacity-0'
                }`}
              >
                <div className="mb-6 text-xl md:text-2xl italic text-blue-100">
                  "{testimonial.content}"
                </div>
                <div className="flex items-center">
                  {testimonial.image && (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                  )}
                  <div>
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-blue-300">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-blue-300' : 'bg-blue-700'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full hidden md:block">
            <button 
              onClick={handlePrev}
              className="bg-blue-800 hover:bg-blue-700 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full hidden md:block">
            <button 
              onClick={handleNext}
              className="bg-blue-800 hover:bg-blue-700 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;