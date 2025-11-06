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
      <div className="relative z-10 h-full flex items-center justify-center pt-16 md:pt-24">
        <div className="w-full px-4 sm:px-6 py-2">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 animate-fadeIn px-[calc(100vw-100%)]">
            <div className="inline-block bg-green-500/60 backdrop-blur text-white rounded px-6 py-3 text-sm font-semibold shadow-lg">
              Heritage Since 1920
            </div>
            <h1 className="text-4xl title md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-3xl">
              Authentic Indian <span className="text-amber-400">Spices & Masalas</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl text-center border border-white/20">
                <div className="w-12 h-12 bg-green-500/90 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Store className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-white">100+</h3>
                <p className="text-white/90 text-sm font-medium">Years Legacy</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl text-center border border-white/20">
                <div className="w-12 h-12 bg-green-500/90 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Sparkles className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-white">500+</h3>
                <p className="text-white/90 text-sm font-medium">Products</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl text-center border border-white/20">
                <div className="w-12 h-12 bg-green-500/90 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-white">10K+</h3>
                <p className="text-white/90 text-sm font-medium">Happy Customers</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl text-center border border-white/20">
                <div className="w-12 h-12 bg-green-500/90 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-white">100%</h3>
                <p className="text-white/90 text-sm font-medium">Pure & Natural</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
