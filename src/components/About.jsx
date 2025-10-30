import { Heart, Leaf, Shield, TrendingUp, MapPin, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Story – A Century of Flavours and Tradition
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            A legacy of flavor and tradition spanning over a century
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                The story of <span className="font-bold text-amber-700">Gandhi Karshan Ghela</span> began in <span className="font-bold">1920</span>, in the heart of Navsari, with a simple dream — to bring authentic Indian flavours to every kitchen. What started as a small spice shop by our forefathers soon became a name synonymous with purity, taste, and tradition.
              </p>

              <p className="text-lg">
                In those early days, each spice was hand-ground, blended with care, and sold with a promise — <span className="font-semibold italic">"Only the best for your family."</span> That promise has guided us for over 100 years, passing from one generation to the next, just like our secret recipes and unwavering commitment to quality.
              </p>

              <p className="text-lg">
                Today, Gandhi Karshan Ghela continues that proud legacy, offering a rich range of <span className="font-semibold">Veg. & Non-Veg. Masalas, Papadums, Dry Fruits, Pickles, Fruit Powders, Instant Flours, Chikki, Khakhra,</span> and many more kitchen essentials — all crafted with the same love and authenticity that defined our beginnings.
              </p>

              <p className="text-lg">
                From our humble shop in Navsari, our flavours have travelled far and wide, reaching families across <span className="font-semibold">India, the United States, the United Kingdom, Canada,</span> and beyond.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl p-8 md:p-12 shadow-xl text-white">
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Visit Our New Store</h3>
                <p className="text-lg leading-relaxed mb-6">
                  As we step into a new chapter with our bigger and better store, our mission remains the same — to fill homes around the world with the warmth, aroma, and soul of true Indian cuisine.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <p className="text-xl font-semibold mb-2">📍 G-2/3, Vastupal Apartment</p>
                  <p className="text-lg">Near Karsanwad Dadangwad</p>
                  <p className="text-lg">Navsari – 396445, Gujarat, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-amber-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.8!2d72.9!3d20.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU3JzAwLjAiTiA3MsKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gandhi Karshan Ghela Location"
            ></iframe>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="bg-gradient-to-r from-amber-100 via-orange-100 to-amber-100 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Gandhi Karshan Ghela
            </h3>
            <p className="text-xl text-amber-800 font-semibold italic">
              A Heritage of Taste. A Promise of Purity.
            </p>
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
              <Globe className="text-white" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Global Reach</h4>
            <p className="text-gray-600 leading-relaxed">
              From Navsari to the world — serving families across India, USA, UK, Canada, and beyond with authentic Indian flavours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
