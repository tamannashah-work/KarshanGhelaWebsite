import { useState, useMemo, useEffect } from 'react';
import { Filter, Search } from 'lucide-react';
import { getAllProducts } from '../api/products';
import { getAllCategories } from '../api/categories';
import Lightbox from '../components/Lightbox';

export default function ProductsPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxAlt, setLightboxAlt] = useState('');
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState(['all']);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [productsData, categoriesData] = await Promise.all([
        getAllProducts(),
        getAllCategories()
      ]);

      console.log('Products data:', productsData); // Debug log

      setAllProducts(productsData.map(p => ({
        ...p,
        image: p.image_url,
        recipe: p.recipe_url, // This will be undefined if recipe_url doesn't exist
        categoryName: p.category?.name || 'Uncategorized',
        categoryEmoji: p.category?.emoji || '📦'
      })));

      setCategories(['all', ...categoriesData.map(c => c.name)]);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  const filtered = useMemo(() => {
    return allProducts.filter(p => {
      const matchName = p.name.toLowerCase().includes(query.toLowerCase());
      const matchCat = category === 'all' || p.categoryName === category;
      return matchName && matchCat;
    });
  }, [allProducts, query, category]);

  return (
    <div className="pt-18 pb-16 bg-gradient-to-br from-green-100 to-amber-100">
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl title md:text-5xl font-bold text-gray-900 mb-6">
              Our Premium Products
            </h1>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover our extensive range of authentic Indian spices, masalas, and traditional products.
              Each item is carefully selected and prepared using time-honored methods.
            </p>
          </div>
        </div>
        <div className="w-24 h-1 bg-amber-600 mx-auto m-8"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Stack on mobile, side by side on md and up */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 pb-4 border-b">
              {/* Filter Label - Full width on mobile, auto width on md+ */}
              <div className="w-full md:w-auto">
                <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900">
                  <Filter className="text-amber-600" size={24} />
                  Filter by Category
                </h2>
              </div>

              {/* Search Bar - Full width on mobile, takes available space on md+ */}
              <div className="w-full md:max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Search products by name..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-5 py-2 rounded-full font-medium transition-all ${
                    category === c
                      ? 'bg-amber-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-amber-100'
                  }`}
                >
                  {c === 'all' ? 'All' : c}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {filtered.map((p, i) => (
    <div
      key={p._id || i}
      className="bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-all"
    >
      <h3 className="font-semibold text-gray-900 text-lg mb-1">
        {p.name}
      </h3>

      <p className="text-sm text-amber-600 font-medium mb-2">
        {p.categoryName}
      </p>

      {p.recipe && (
        <button
                  onClick={() => {
                    setLightboxImage(p.recipe);
                    setLightboxAlt(`Recipe for ${p.name}`);
                  }}
                  className="text-sm text-white bg-amber-600 hover:bg-amber-700 px-3 py-1 rounded-md mt-2"
                >
                  View Recipe
                </button>
              )}
            </div>
          ))}
        </div>

          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl title md:text-4xl font-bold mb-6">
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

      {lightboxImage && (
        <Lightbox 
          src={lightboxImage} 
          alt={lightboxAlt} 
          onClose={() => {
            setLightboxImage(null);
            setLightboxAlt('');
          }} 
        />
      )}
    </div>
  );
}
