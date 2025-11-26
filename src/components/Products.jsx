import { Download } from "lucide-react";

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

  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-br from-green-100 to-amber-100"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 title">
            Our Premium Products
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover our wide range of authentic Indian spices and traditional
            products
          </p>
        </div>

        {/* Product Grid */}
        <div className="max-w-6xl mx-auto">
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

              <a
                href="/products"
                className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all inline-block"
              >
                View All Products
              </a>
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
