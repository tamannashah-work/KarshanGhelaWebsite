import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { productCategories } from '../data/products';
import ProductCarousel from './ProductCarousel';
export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const allProductsWithImages = productCategories
    .flatMap(cat => cat.items.filter(item => item.image).map(item => ({ ...item, category: cat.name })));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allProductsWithImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [allProductsWithImages.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % allProductsWithImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + allProductsWithImages.length) % allProductsWithImages.length);
  };

  const getVisibleProducts = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(allProductsWithImages[(currentIndex + i) % allProductsWithImages.length]);
    }
    return visible;
  };

  if (allProductsWithImages.length === 0) {
    return null;
  }

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-green-100 to-amber-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl title md:text-4xl font-bold text-gray-900 mb-4">
            Our Premium Products
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover our wide range of authentic Indian spices and traditional products
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 mb-12 max-w-6xl mx-auto">
          <div className="lg:w-1/4 flex justify-center">
            <img
              src="/images/Karshan-Ghela-Logo-wob-300x300.png"
              alt="Karshan Ghela Logo"
              className="w-48 h-48 object-contain"
            />
          </div>

          <div className="lg:w-3/4 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {getVisibleProducts().map((product, idx) => (
                <div
                  key={idx}
                  className={`relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all ${
                    idx === 1 ? 'md:scale-105 md:z-10' : ''
                  }`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="text-right mb-auto pt-4">
                      <span className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {product.category}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl mb-2">{product.name}</h3>
                      <p className="text-amber-100 text-sm leading-relaxed">
                        Premium quality product
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute -left-6 top-1/2 -translate-y-1/2 bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110 hidden md:flex items-center justify-center z-20"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute -right-6 top-1/2 -translate-y-1/2 bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110 hidden md:flex items-center justify-center z-20"
            >
              <ChevronRight size={24} />
            </button>

            <div className="flex justify-center gap-2 mt-8">
              {allProductsWithImages.slice(0, 6).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all rounded-full ${
                    index === currentIndex % 6
                      ? 'w-8 h-3 bg-amber-600'
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 md:p-12 text-center text-white max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 title">
            Explore Our Complete Product Range
          </h3>
          
          
          <ProductCarousel />
          <p className="text-lg mb-6 text-amber-50">
            Visit our products page to browse our complete range of 500+ authentic products
          </p>
          <a
            href="/products"
            className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all inline-block"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
