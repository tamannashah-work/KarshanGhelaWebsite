import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { productCategories } from '../data/products';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState(productCategories[0]);

  return (
    <section id="products" className="py-20 bg-white">
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

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
          {productCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category)}
              className={`p-4 rounded-xl transition-all transform hover:scale-105 text-center ${
                selectedCategory.id === category.id
                  ? 'bg-amber-600 text-white shadow-xl'
                  : 'bg-gradient-to-br from-amber-50 to-orange-50 text-gray-700 hover:shadow-lg'
              }`}
            >
              <div className="text-3xl mb-2">{category.emoji}</div>
              <h3 className="font-semibold text-sm">{category.name}</h3>
            </button>
          ))}
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">{selectedCategory.emoji}</div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {selectedCategory.name}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {selectedCategory.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {selectedCategory.items.map((item, index) => (
              <div
                key={index}
                className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
                  <div></div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">{item.name}</h4>
                    <a
                      href={item.recipe}
                      className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors"
                    >
                      Recipe
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 md:p-12 text-center text-white">
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
