import { Heart, Leaf, Shield, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Gandhi Karshan Ghela
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            A legacy of flavor and tradition spanning over a century
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Est. 1920
            </div>
            <h3 className="text-3xl font-bold text-gray-900">
              Heritage & Excellence Since 1920
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Gandhi Karshan Ghela has been a cornerstone of authentic Indian flavors for over 100 years.
              What began as a small spice shop in Navsari has grown into a trusted name for premium quality
              masalas, spices, and traditional Indian products.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our commitment to quality, authenticity, and traditional methods has been passed down through
              generations. We take pride in offering products that bring the true taste of India to your kitchen,
              maintaining the same standards that made us a household name over a century ago.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From handpicked spices to traditional recipes, every product reflects our dedication to preserving
              the rich culinary heritage of India while serving modern families with the same care and attention
              our ancestors provided.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 shadow-xl">
              <div className="aspect-square bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                <Heart size={120} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-4">
              <Leaf className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">100% Natural</h4>
            <p className="text-gray-600 leading-relaxed">
              We use only the finest natural ingredients with no artificial colors, preservatives, or additives.
              Pure and authentic, just as nature intended.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-4">
              <Shield className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Quality Assured</h4>
            <p className="text-gray-600 leading-relaxed">
              Every product undergoes rigorous quality checks to ensure you receive only the best.
              Our reputation for excellence spans generations.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Traditional Methods</h4>
            <p className="text-gray-600 leading-relaxed">
              We honor time-tested traditional preparation methods while embracing modern hygiene standards
              to deliver authentic flavors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
