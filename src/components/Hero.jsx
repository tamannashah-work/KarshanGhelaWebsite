import { Award, Users, Store, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/video-poster.png"
        onError={(e) => {
          console.error('Video failed to load, showing fallback', e);
          e.target.style.display = 'none';
          const fallback = document.getElementById('video-fallback');
          if (fallback) fallback.style.display = 'block';
        }}
      >
        {/* WebM format (better compression) */}
        <source src="/videos/home.webm" type="video/webm" />
        {/* Fallback to MP4 for browsers that don't support WebM */}
        <source src="/videos/home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div id="video-fallback" className="hidden absolute inset-0 w-full h-full bg-cover bg-center" style={{
        backgroundImage: 'url(/images/video-poster.png)'
      }}></div>

      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="w-full px-4 sm:px-6 py-4">
          <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-8 animate-fadeIn px-4 sm:px-6">
            <div className="inline-block bg-green-500/60 backdrop-blur text-white rounded px-4 py-2 text-xs sm:text-sm font-semibold shadow-lg">
              Heritage Since 1920
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-3xl px-2">
              Authentic Indian <span className="text-amber-400">Spices & Masalas</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/95 leading-relaxed max-w-3xl mx-auto drop-shadow-lg px-2">
              Experience over 100 years of tradition with premium quality spices, masalas, and authentic Indian products.
              From our family to yours, bringing flavor and heritage to every kitchen.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => scrollToSection('products')}
                className="bg-green-700 hover:bg-green-800 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-2xl"
              >
                Explore Products
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-900 px-10 py-4 rounded-lg font-semibold text-lg transition-all shadow-2xl"
              >
                Contact Us
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 max-w-4xl mx-auto px-4">
              <div className="bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-xl text-center border border-white/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/90 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Store className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">100+</h3>
                <p className="text-white/90 text-sm sm:text-base font-medium">Years Legacy</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-xl text-center border border-white/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/90 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Sparkles className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">500+</h3>
                <p className="text-white/90 text-sm sm:text-base font-medium">Products</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-xl text-center border border-white/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/90 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">10K+</h3>
                <p className="text-white/90 text-sm sm:text-base font-medium">Happy Customers</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-xl text-center border border-white/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/90 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">100%</h3>
                <p className="text-white/90 text-sm sm:text-base font-medium">Pure & Natural</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
