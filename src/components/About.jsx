import { Heart, Leaf, Shield, TrendingUp, MapPin, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="pt-5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl title text-gray-900 mb-3 sm:mb-4">
            Our Story - A Century of Flavours and Tradition
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-amber-600 mx-auto mb-3"></div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            A legacy of flavor and tradition spanning over a century
          </p>
        </div>
        
        {/* Images - On top for mobile, original layout for desktop */}
        <div className="flex flex-col gap-6 mb-8 md:hidden">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/Karsanghela-Shop-front.png"
              alt="Karshan Ghela Store Front"
              className="w-full h-auto"
            />
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/Karshan-Ghela-Logo-wob-1-1536x1241.png"
              alt="Karshan Ghela Logo"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Story Content */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 md:p-8 shadow-lg mb-8">
          <div className="space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
            <p>
              The story of <span className="font-bold text-amber-700"> Karshan Ghela</span> began in <span className="font-bold">1920</span>, in the heart of Navsari, with a simple dream — to bring authentic Indian flavours to every kitchen. What started as a small spice shop by our forefathers soon became a name synonymous with purity, taste, and tradition.
            </p>

            <p>
              In those early days, each spice was hand-ground, blended with care, and sold with a promise — <span className="font-semibold italic">"Only the best for your family."</span> That promise has guided us for over 100 years, passing from one generation to the next, just like our secret recipes and unwavering commitment to quality.
            </p>

            <p>
              Today,  Karshan Ghela continues that proud legacy, offering a rich range of <span className="font-semibold">Veg. & Non-Veg. Masalas, Papadums, Dry Fruits, Pickles, Fruit Powders, Instant Flours, Chikki, Khakhra,</span> and many more kitchen essentials — all crafted with the same love and authenticity that defined our beginnings.
            </p>

            <p>
              From our humble shop in Navsari, our flavours have travelled far and wide, reaching families across <span className="font-semibold">India, the United States, the United Kingdom, Canada,</span> and beyond.
            </p>
          </div>
        </div>

        {/* Images - Hidden on mobile, shown on desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/Karsanghela-Shop-front.png"
              alt="Karshan Ghela Store Front"
              className="w-full h-auto"
            />
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/Karshan-Ghela-Logo-wob-1-1536x1241.png"
              alt="Karshan Ghela Logo"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Store Info and Map Section */}
        <div className="max-w-6xl mx-auto mb-12 sm:mb-16">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            {/* Store Info */}
            <div className="lg:w-1/2 bg-gradient-to-br from-green-700 to-green-800 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl text-white">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="flex-shrink-0">
                  <MapPin className="mt-1 w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl title font-bold mb-3 sm:mb-4">Visit Our New Store</h3>
                  <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                    As we step into a new chapter with our bigger and better store, our mission remains the same — to fill homes around the world with the warmth, aroma, and soul of true Indian cuisine.
                  </p>
                  <div className="bg-green-100/40 backdrop-blur rounded-xl p-4 sm:p-6 border border-white/20">
                    <p className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">G-2/3, Vastupal Apartment Dadangwad,</p>
                    <p className="text-sm sm:text-base">Mota Bazaar Rd, Madhumati Colony,</p>
                    <p className="text-sm sm:text-base">Navsari - 396445, Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="lg:w-1/2 rounded-2xl overflow-hidden shadow-xl border-2 sm:border-4 border-amber-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.8!2d72.9!3d20.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU3JzAwLjAiTiA3MsKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ minHeight: "350px", border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Karshan Ghela Location"
                className="w-full"
              ></iframe>
            </div>

          </div>
        </div>
        {/* <div className="max-w-5xl mx-auto mb-16"> */}
          {/* <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-2xl p-8 md:p-12 shadow-xl text-white">
            <div className="flex items-between gap-4 mb-6">
              <MapPin className="flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Visit Our New Store</h3>
                <p className="text-lg leading-relaxed mb-6">
                  As we step into a new chapter with our bigger and better store, our mission remains the same — to fill homes around the world with the warmth, aroma, and soul of true Indian cuisine.
                </p>
                <div className="bg-green-100/40 backdrop-blur rounded-xl p-6 border border-white/20">
                  <p className="text-xl font-semibold mb-2">G-2/3, Vastupal Apartment Dadangwad,</p>
                  <p className="text-lg">Mota Bazaar Rd, Madhumati Colony,</p>
                  <p className="text-lg">Navsari - 396445, Gujarat, India</p>
                </div>
              </div>
            </div>
          </div> */}

        {/* <div className="max-w-5xl mx-auto mb-16">
          <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-amber-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.8!2d72.9!3d20.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU3JzAwLjAiTiA3MsKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title=" Karshan Ghela Location"
            ></iframe>
          </div>
        </div> */}
        
        {/* </div> */}
      </div>
    </section>
  );
}
