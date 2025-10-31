import { useState } from 'react';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';

export default function OnTheShelf() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      name: 'Super Garam Masala',
      category: 'Veg Masala',
      image: '/images/Chinese-Masala-scaled.jpg',
      description: 'Premium blend of spices for authentic Indian flavor'
    },
    {
      name: 'Paneer Butter Masala',
      category: 'Veg Masala',
      image: '/images/indian-garam-masala-powder-and-colourful-spices-s-2023-11-27-05-02-17-utc-scaled.jpg',
      description: 'Creamy and aromatic masala perfect for paneer dishes'
    },
    {
      name: 'Tandoori Masala',
      category: 'Non-Veg Masala',
      image: '/images/delicious-chicken-curry-2023-11-27-05-15-43-utc-1024x684.png',
      description: 'Authentic spice blend for tandoori preparations'
    },
    {
      name: 'Chat Masala',
      category: 'Instant Masala',
      image: '/images/spices-in-spoons-2023-11-27-05-32-47-utc-scaled.jpg',
      description: 'Tangy and flavorful seasoning for street snacks'
    },
    {
      name: 'Papad Assortment',
      category: 'Papad',
      image: '/images/gujarati-papad-or-papadum-2023-11-27-05-36-57-utc-scaled.jpg',
      description: 'Crispy traditional papadums in multiple flavors'
    },
    {
      name: 'Dry Fruits Mix',
      category: 'Dry Fruits',
      image: '/images/tasty-spices-and-herbs-on-old-board-2023-11-27-04-56-26-utc-1-1024x683.jpg',
      description: 'Premium selection of cashews, almonds & pistachios'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const getVisibleProducts = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(products[(currentIndex + i) % products.length]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            On The Shelf
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover our most popular and bestselling products
          </p>
        </div>

        <div className="relative mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="text-right">
                    <span className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {product.category}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">{product.name}</h3>
                    <p className="text-amber-100 text-sm leading-relaxed">
                      {product.description}
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
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-3 bg-amber-600'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-center text-white shadow-xl">
          <div className="mb-4">
            <Download size={48} className="mx-auto text-amber-100" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Download Our Catalogue</h3>
          <p className="text-amber-50 mb-6 leading-relaxed">
            Get a comprehensive look at our complete range of 500+ authentic products
          </p>
          <a
            href="/Karshan-Ghela-New-Brochure-2022-1.pdf"
            download
            className="inline-flex items-center gap-2 bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all"
          >
            <Download size={20} />
            Download PDF Catalogue
          </a>
        </div>
      </div>
    </section>
  );
}
