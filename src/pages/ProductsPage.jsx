import { useState, useEffect } from 'react';
import { Filter, Package } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function ProductsPage() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('display_order');

    if (!error && data) {
      setCategories(data);
    }
    setLoading(false);
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

  const filteredCategories = selectedCategory === 'all'
    ? categories
    : categories.filter(cat => cat.slug === selectedCategory);

  return (
    <div className="pt-18 pb-16   bg-gradient-to-br from-green-100 to-amber-100">
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Premium Products
            </h1>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover our extensive range of authentic Indian spices, masalas, and traditional products.
              Each item is carefully selected and prepared using time-honored methods.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b">
              <Filter className="text-amber-600" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Filter by Category</h2>
            </div>

            <div className="flex flex-wrap gap-3 mb-12">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Products
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category.slug
                      ? 'bg-amber-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {loading ? (
              <div className="text-center py-12">
                <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="text-gray-600 mt-4">Loading products...</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCategories.map((category) => (
                  <div
                    key={category.id}
                    className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-all transform hover:scale-105"
                  >
                    <div className="text-center">
                      <div className="text-6xl mb-4">
                        {productIcons[category.slug] || '🌟'}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-center gap-2 text-amber-600 font-medium">
                        <Package size={20} />
                        <span>Premium Quality</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Our Products Stand Out
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
                      <p className="text-gray-600">Hand-selected ingredients sourced from the best farms across India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Traditional Methods</h3>
                      <p className="text-gray-600">Prepared using century-old recipes and techniques</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">No Additives</h3>
                      <p className="text-gray-600">100% natural with no artificial colors or preservatives</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Fresh & Aromatic</h3>
                      <p className="text-gray-600">Ground and packaged to retain maximum freshness and flavor</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="aspect-square bg-gradient-to-br from-amber-200 to-orange-300 rounded-xl flex items-center justify-center">
                    <Package size={120} className="text-amber-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Looking for Something Specific?
            </h2>
            <p className="text-xl text-amber-50 leading-relaxed mb-8">
              We offer over 500 different products in store. Visit us or get in touch to find exactly what you need.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all inline-block"
              >
                Contact Us
              </a>
              <a
                href="tel:+919825459761"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 rounded-lg font-semibold transition-all inline-block"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
