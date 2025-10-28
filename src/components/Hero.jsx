import { Sparkles, Award, Users, Store } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-16 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeIn">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold">
              Heritage Since 1920
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Authentic Indian <span className="text-amber-600">Spices & Masalas</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Experience over 100 years of tradition with premium quality spices, masalas, and authentic Indian products.
              From our family to yours, bringing flavor and heritage to every kitchen.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('products')}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                Explore Products
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-3 rounded-lg font-semibold transition-all border-2 border-gray-200"
              >
                Contact Us
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-square bg-gradient-to-br from-amber-200 to-orange-300 rounded-xl flex items-center justify-center">
                <Sparkles size={120} className="text-amber-600" />
              </div>
            </div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-amber-200 rounded-full filter blur-3xl opacity-50 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-200 rounded-full filter blur-3xl opacity-50 -z-10"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Store className="text-amber-600" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">100+</h3>
            <p className="text-gray-600 text-sm">Years Legacy</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Sparkles className="text-amber-600" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">500+</h3>
            <p className="text-gray-600 text-sm">Products</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="text-amber-600" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">10K+</h3>
            <p className="text-gray-600 text-sm">Happy Customers</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="text-amber-600" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">100%</h3>
            <p className="text-gray-600 text-sm">Pure & Natural</p>
          </div>
        </div>
      </div>
    </section>
  );
}
