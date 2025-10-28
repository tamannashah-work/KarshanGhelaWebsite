import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (isAutoPlaying && testimonials.length > 0) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isAutoPlaying, testimonials.length]);

  const fetchTestimonials = async () => {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('is_active', true)
      .order('display_order');

    if (!error && data) {
      setTestimonials(data);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  if (testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Trusted by thousands of families across generations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="absolute top-8 left-8 text-amber-300 opacity-50">
              <Quote size={48} />
            </div>

            <button
              onClick={prevSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-amber-600 hover:text-white text-gray-700 p-3 rounded-full shadow-lg transition-all z-10"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              onMouseEnter={() => setIsAutoPlaying(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-amber-600 hover:text-white text-gray-700 p-3 rounded-full shadow-lg transition-all z-10"
            >
              <ChevronRight size={24} />
            </button>

            <div className="text-center relative z-10">
              <div className="flex justify-center mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} size={24} className="text-amber-500 fill-amber-500" />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "{currentTestimonial.content}"
              </p>

              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {currentTestimonial.customer_name.charAt(0)}
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">
                    {currentTestimonial.customer_name}
                  </h4>
                  <p className="text-sm text-gray-600">Valued Customer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-amber-600'
                    : 'w-3 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">10,000+</div>
            <p className="text-gray-700 font-medium">Happy Customers</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">100+</div>
            <p className="text-gray-700 font-medium">Years of Trust</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl text-center">
            <div className="text-4xl font-bold text-amber-600 mb-2">500+</div>
            <p className="text-gray-700 font-medium">Quality Products</p>
          </div>
        </div>
      </div>
    </section>
  );
}
