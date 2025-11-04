
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productCategories } from '../data/products';
import Lightbox from '../components/Lightbox';

export default function ProductDetail() {
  const { slug } = useParams();
  const [lightbox, setLightbox] = useState(null);
  const all = productCategories.flatMap(c => c.items.map(i => ({...i, category:c.name})));
  const bySlug = s => s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
  const product = all.find(p => bySlug(p.name) === slug);

  if(!product) return <div className="p-8 text-center">Product not found.</div>;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          {product.image ? (
            <img src={product.image} alt={product.name} className="rounded-lg shadow-lg" />
          ) : (
            <div className="h-64 bg-gray-100 flex items-center justify-center rounded-lg">No Image</div>
          )}
          {product.recipe && (
            <button onClick={()=>setLightbox(product.recipe)} className="mt-4 bg-amber-600 text-white px-4 py-2 rounded">View Recipe</button>
          )}
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-2">{product.category}</p>
          <p className="text-gray-700 mb-4">Premium product crafted with authentic flavors.</p>
          <Link to="/products" className="text-amber-600 hover:underline">← Back to Products</Link>
        </div>
      </div>
      {lightbox && <Lightbox src={lightbox} alt="Recipe" onClose={()=>setLightbox(null)} />}
    </div>
  );
}
