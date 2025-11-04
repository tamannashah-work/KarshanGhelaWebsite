
import React, { useState } from 'react';
import { recipes } from '../data/recipes';
import Lightbox from './Lightbox';

export default function RecipesGallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="py-12 bg-gradient-to-br from-green-100 to-amber-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Recipes</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {recipes.map((r, i) => (
            <div key={i} className="cursor-pointer" onClick={() => setLightbox(r.src)}>
              <img src={r.src} alt={r.alt} className="rounded-lg shadow hover:scale-105 transition-transform h-40 w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      {lightbox && <Lightbox src={lightbox} alt="Recipe" onClose={() => setLightbox(null)} />}
    </section>
  );
}
