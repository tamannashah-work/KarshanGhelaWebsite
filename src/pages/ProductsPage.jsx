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
           <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b">
              {/* Filter Label on the Left */}
              <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900">
                <Filter className="text-amber-600" size={24} />
                Filter by Category
              </h2>

              {/* Search Bar on the Right */}
              <div className="relative flex-1 md:max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search products by name..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
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
                  {c}
                </button>
              ))}
            </div>

            {loading ? (
              <div className="text-center py-12">
                <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600 text-lg">Loading products...</p>
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No products found matching your search.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filtered.map((p, i) => (
                  <div key={p._id || i} className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl transition-all group">
                    {p.image ? (
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'flex';
                          }}
                        />
                        <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg hidden flex-col items-center justify-center text-gray-400">
                          <div className="text-4xl mb-2">{p.categoryEmoji || '📦'}</div>
                          <span className="text-sm">No Image</span>
                        </div>
                        {p.recipe && (
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                console.log('Recipe URL:', p.recipe_url); // Debug log
                                console.log('Mapped recipe:', p.recipe);   // Debug log
                                if (p.recipe) {
                                  setLightboxImage(p.recipe);
                                  setLightboxAlt(`Recipe for ${p.name}`);
                                } else {
                                  console.warn('No recipe URL found for product:', p.name);
                                }
                              }}
                              className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-semibold text-sm"
                            >
                              View Recipe
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg flex flex-col items-center justify-center text-gray-400">
                        <div className="text-4xl mb-2">{p.categoryEmoji || '📦'}</div>
                        <span className="text-sm">No Image</span>
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{p.name}</h3>
                      <p className="text-sm text-amber-600 font-medium">{p.categoryName}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
