import { Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Products() {

  const products = [
    {
      name: "Premium Spice Mix",
      category: "Spices",
      image: "/images/1.jpg",
    },
    {
      name: "Traditional Pickles",
      category: "Pickles",
      image: "/images/pickles.jpg",
    },
    {
      name: "Specialty Product",
      category: "Specialty",
      image: "/images/2.jpg",
    },
  ];

  const navigate=useNavigate();
  const handleProducts=()=>{
    navigate("/products");    
  }

  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-br from-green-100 to-amber-100"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 title">
            🌍 Worldwide Shipping
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            We offer reliable masala shipping services worldwide — USA, UK, New Zealand, Panama, Australia, and many more international destinations.
            <br />
            Local delivery within India is also available.
          </p>
        </div>

        {/* Shipping & Packaging Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mb-12">
            {/* Shipping Info Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 transform hover:scale-105 transition-all">
                <div className="text-4xl mb-4">🚢</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Reach</h3>
                <p className="text-gray-600 leading-relaxed">
                    Every package is handled with care to ensure maximum freshness and aroma when it reaches your doorstep. 
                    Whether you are in the Americas, Europe, or Oceania, we deliver authentic flavors to you.
                </p>
            </div>

            {/* Packaging Details Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 transform hover:scale-105 transition-all">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Packaging Details</h3>
                <ul className="text-gray-600 space-y-3">
                    <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>Masalas available in 250 g and 500 g sealed packs</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>Papads vacuum-packed in 500 g for long-lasting crispness</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <span>Hygienic, secure packaging ideal for international shipping</span>
                    </li>
                </ul>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto px-4 mb-12">
            <div className="bg-amber-50 rounded-2xl p-6 shadow-md border border-amber-100 text-center transform hover:scale-105 transition-all">
                <div className="text-3xl mb-3">💬</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Get Your Quote</h3>
                <p className="text-gray-700 text-sm font-medium italic mb-6 leading-relaxed">
                    After you finalize your order, we’ll provide a detailed quote including product prices and shipping charges based on your location.
                </p>
                <button
                    onClick={() => navigate("/contact")}
                    className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2 rounded-lg font-bold text-base hover:shadow-lg hover:from-amber-700 hover:to-orange-700 transition-all transform hover:-translate-y-1"
                >
                    Order Yours
                </button>
             </div>
          </div>

        {/* Product Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-all"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

          {/* SIDE-BY-SIDE CTA + DOWNLOAD (50% each) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12 px-4">
            {/* View Products Block */}
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 md:p-10 text-center text-white shadow-xl h-full flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 title">
                Explore Our Complete Product Range
              </h3>
              <p className="text-lg mb-6 text-amber-50">
                Visit our products page to browse our complete range of
                authentic products
              </p>

              <button
                onClick={handleProducts}
                className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all inline-block"
              >
                View All Products
              </button>
            </div>

            {/* Download Catalogue Block */}
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 md:p-10 text-center text-white shadow-xl h-full flex flex-col justify-center">
              <div className="mb-4">
                <Download size={48} className="mx-auto text-amber-100" />
              </div>
              <h3 className="text-2xl font-bold mb-3">
                Download Our Catalogue
              </h3>
              <p className="text-amber-50 mb-6 leading-relaxed">
                Get a comprehensive look at our complete range of 500+ authentic
                products
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
        </div>
      </div>
    </section>
  );
}
