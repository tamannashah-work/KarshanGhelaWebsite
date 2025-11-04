
import React, { useState, useMemo } from 'react';
import { productCategories } from '../data/products';
import Lightbox from './Lightbox';

export default function ProductCardGrid() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  const allProducts = useMemo(() => productCategories.flatMap(cat => cat.items.map(item => ({ ...item, category: cat.name }))), []);
  const categories = ['all', ...productCategories.map(c => c.name)];

  const filtered = allProducts.filter(p => {
    const matchName = p.name.toLowerCase().includes(query.toLowerCase());
    const matchCat = category === 'all' || p.category === category;
    return matchName && matchCat;
  });

  return (
    <section className="py-12 bg-gradient-to-br from-green-100 to-amber-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search products..."
            className="px-4 py-2 border rounded-lg w-full md:w-1/3"
          />
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={\`px-4 py-2 rounded-full \${category===c?'bg-amber-600 text-white':'bg-white'}\`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filtered.map((p,i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              {p.image ? (
                <img src={p.image} alt={p.name} className="w-full h-36 object-cover rounded" />
              ) : (
                <div className="h-36 bg-gray-100 flex items-center justify-center text-gray-400">No Image</div>
              )}
              <h3 className="mt-3 font-semibold text-gray-900">{p.name}</h3>
              <p className="text-sm text-gray-500">{p.category}</p>
              <div className="mt-2">
                {p.recipe && (
                  <button onClick={() => setLightbox(p.recipe)} className="text-sm bg-amber-600 text-white px-3 py-1 rounded">View Recipe</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {lightbox && <Lightbox src={lightbox} alt="Recipe" onClose={() => setLightbox(null)} />}
    </section>
  );
}
