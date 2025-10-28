import { Heart, Leaf, Shield, TrendingUp, Award, Users, Store, Clock } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-16">
      <section className="py-12 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Gandhi Karshan Ghela
            </h1>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              A century-old legacy of authentic Indian flavors
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 shadow-xl">
                <div className="aspect-square bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <Store size={120} className="text-white" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold">
                Established 1920
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Heritage Story
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Gandhi Karshan Ghela was founded in 1920 with a simple mission: to bring the authentic
                flavors of India to every home. What started as a small spice shop in the heart of
                Navsari has grown into a trusted name synonymous with quality and tradition.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                For over 100 years, we have maintained our commitment to sourcing the finest ingredients,
                using traditional preparation methods, and delivering products that capture the true
                essence of Indian cuisine. Our family's dedication to excellence has been passed down
                through four generations, each adding their expertise while honoring the foundations
                laid by our ancestors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Leaf className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">100% Natural</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                We believe in the purity of nature. All our products are made from natural ingredients
                without any artificial colors, preservatives, or additives. What you get is pure,
                authentic, and wholesome.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Quality Assured</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Every product undergoes rigorous quality checks at multiple stages. Our reputation
                for excellence spans over a century, built on the trust of thousands of satisfied
                customers across generations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Traditional Methods</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                We honor time-tested traditional preparation methods passed down through generations.
                While we embrace modern hygiene standards, our recipes and techniques remain authentic
                to their roots.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-amber-600" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">100+ Years</h3>
              <p className="text-gray-600">Heritage & Experience</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-amber-600" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">10,000+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-amber-600" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Quality Products</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-amber-600" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">100%</h3>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience the Difference
            </h2>
            <p className="text-xl text-amber-50 leading-relaxed mb-8">
              Visit our store in Navsari and discover why families have trusted us for over a century.
              Our knowledgeable staff is ready to help you find the perfect spices and products for your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/products"
                className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all inline-block"
              >
                Explore Products
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 rounded-lg font-semibold transition-all inline-block"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
