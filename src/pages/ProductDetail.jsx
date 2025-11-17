import React from 'react';

import { useParams, Link } from 'react-router-dom';
import { productCategories } from '../data/products';
import Lightbox from '../components/Lightbox';

export default function ProductDetail() {
  const { slug } = useParams();
  const allItems = productCategories.flatMap(cat => cat.items.map(item => ({...item, category: cat.name})));
  const bySlug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const item = allItems.find(i => bySlug(i.name) === slug);

  const [lightbox, setLightbox] = React.useState(null);

  if (!item) {
    return (
      <div className="container mx-auto p-8">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <p className="mt-4">The product you are looking for couldn't be found.</p>
        <p className="mt-4"><Link to="/products" className="text-amber-600">Back to products</Link></p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          {item.image ? <img src={item.image} alt={item.name} className="w-full h-96 object-cover rounded" /> : <div className="w-full h-96 bg-gray-100 rounded flex items-center justify-center">No Image</div>}
          <div className="mt-4 flex gap-2">
            {item.recipe && <button onClick={() => setLightbox(item.recipe)} className="px-3 py-2 bg-amber-600 text-white rounded">View Recipe</button>}
          </div>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h1 className="text-2xl font-bold">{item.name}</h1>
          <p className="text-gray-600 mt-2">{item.category}</p>
          <p className="mt-4">Premium quality product. Add your product details here.</p>
        </div>
      </div>
      {lightbox && <Lightbox src={lightbox} alt="Recipe" onClose={() => setLightbox(null)} />}
    </div>
  );
}
