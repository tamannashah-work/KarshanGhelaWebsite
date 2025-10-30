import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Products() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('display_order');

    if (!error && data) {
      setCategories(data);
      if (data.length > 0) {
        setSelectedCategory(data[0]);
      }
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length);
    setSelectedCategory(categories[(currentIndex + 1) % categories.length]);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
    setSelectedCategory(categories[(currentIndex - 1 + categories.length) % categories.length]);
  };

  const productIcons = {
    'masalas-spices': '🌶️',
    'papadums': '🥙',
    'dry-fruits': '🥜',
    'pickles': '🥒',
    'fruit-powders': '🍊',
    'instant-flour': '🌾',
    'chikki': '🍬',
    'khakhra': '🍪',
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-green-100 to-amber-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Premium Products
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover our wide range of authentic Indian spices and traditional products
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentIndex(index);
              }}
              className={`p-6 rounded-xl transition-all transform hover:scale-105 ${
                selectedCategory?.id === category.id
                  ? 'bg-amber-600 text-white shadow-xl'
                  : 'bg-white text-gray-700 hover:bg-amber-50'
              }`}
            >
              <div className="text-4xl mb-3">{productIcons[category.slug] || '🌟'}</div>
              <h3 className="font-semibold mb-2">{category.name}</h3>
              <p className={`text-sm ${
                selectedCategory?.id === category.id ? 'text-amber-100' : 'text-gray-500'
              }`}>
                {category.description}
              </p>
            </button>
          ))}
        </div>

        {categories.length > 0 && (
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full shadow-lg transition-all z-10"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full shadow-lg transition-all z-10"
            >
              <ChevronRight size={24} />
            </button>

            <div className="text-center max-w-2xl mx-auto">
              <div className="text-6xl mb-6">
                {productIcons[selectedCategory?.slug] || '🌟'}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedCategory?.name}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                {selectedCategory?.description}
              </p>
              <div className="flex justify-center gap-2">
                {categories.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-8 bg-amber-600'
                        : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Looking for Specific Products?
          </h3>
          <p className="text-lg mb-6 text-amber-50">
            Contact us or visit our store to explore our complete range of 500+ products
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all inline-block"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
