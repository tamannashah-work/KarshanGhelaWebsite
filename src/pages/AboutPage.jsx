import { Heart, Leaf, Shield, TrendingUp, Award, Users, Store, Clock,Globe } from 'lucide-react';
import About from '../components/About';
export default function AboutPage() {
  return (
    <div className=" pt-5 pb-16  bg-gradient-to-br from-green-100 to-amber-100">
      <About />

      <section className=" pb-8 ">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl title md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          </div>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-xl text-amber-800 font-semibold italic">
              A Heritage of Taste. A Promise of Purity.
            </p>
          </div>
        </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Leaf className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">100% Natural</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                We use only the finest natural ingredients with no artificial colors, preservatives, or additives.
                Pure and authentic, just as nature intended.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Quality Assured</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Every product undergoes rigorous quality checks to ensure you receive only the best.
                Our reputation for excellence spans generations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Global Reach</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                From Navsari to the world — serving families across India, USA, UK, Canada, and beyond with authentic Indian flavours.
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

      <section className="py-16 bg-gradient-to-r from-green-700 to-green-800">
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
