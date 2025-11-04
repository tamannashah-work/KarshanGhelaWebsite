
// import React, { useState, useEffect } from 'react';
// import { productCategories } from '../data/products';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// export default function ProductCarousel() {
//   const products = productCategories.flatMap(cat => cat.items).filter(p => p.image);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => setIndex(i => (i + 1) % products.length), 4000);
//     return () => clearInterval(timer);
//   }, [products.length]);

//   const next = () => setIndex(i => (i + 1) % products.length);
//   const prev = () => setIndex(i => (i - 1 + products.length) % products.length);

//   if (products.length === 0) return null;

//   return (
//     <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
//       <img
//         src={products[index].image}
//         alt={products[index].name}
//         className="w-full h-80 object-cover transition-all duration-700"
//       />
//       <div className="absolute inset-0 flex items-center justify-between px-4">
//         <button onClick={prev} className="bg-white/70 hover:bg-white p-2 rounded-full">
//           <ChevronLeft />
//         </button>
//         <button onClick={next} className="bg-white/70 hover:bg-white p-2 rounded-full">
//           <ChevronRight />
//         </button>
//       </div>
//       <div className="absolute bottom-3 w-full flex justify-center gap-2">
//         {products.slice(0,6).map((_, i) => (
//           <div key={i} className={`w-3 h-3 rounded-full \${i === index ? 'bg-amber-600' : 'bg-white/60'}`} />
//         ))}
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
const packagingImages = [
  "./images/packaging/",
  "/images/packaging/black_mustaed_seeds.png",
  "/images/packaging/chat_masala.png",
  "/images/packaging/chia_seeds.png",
  "/images/packaging/chicken_gravy_masala.png",
  "/images/packaging/corriander_powder.png",
  "/images/packaging/corriander_seeds.png",
  "/images/packaging/cumin_seeds.png",
  "/images/packaging/egg_ghotala_masala.png",
  "/images/packaging/fried_rice_mix.jpg",
  "/images/packaging/fried_rice_mix.png",
  "/images/packaging/hing.png",
  "/images/packaging/idli_dosa_chutney_masala.png",
  "/images/packaging/kadhi_masala.png",
  "/images/packaging/masala.jpg",
  "/images/packaging/masala1.jpg",
  "/images/packaging/masala2.jpg",
  "/images/packaging/mustard_seeds.png",
  "/images/packaging/red_chilly_powder.png",
  "/images/packaging/super_garam_masala.jpg",
  "/images/packaging/tumeric_powder.png",
];

export default function VerticalProductCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("right");
      setCurrent((prev) => (prev + 1) % packagingImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-12 flex flex-col items-center overflow-hidden">
      <div className="relative w-full max-w-md h-96 overflow-hidden flex justify-center items-center">
        {packagingImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Packaging ${index}`}
            className={`absolute w-auto h-80 object-contain transition-all duration-700 ease-in-out ${
              index === current
                ? "opacity-100 translate-x-0"
                : direction === "right"
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
