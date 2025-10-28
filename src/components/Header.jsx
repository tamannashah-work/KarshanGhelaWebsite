import { Menu, X, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="bg-amber-600 text-white py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <a href="tel:+919825459761" className="hover:underline">+91 98254 59761</a>
            </div>
            <div className="hidden sm:flex items-center gap-1">
              <MapPin size={14} />
              <span>Navsari, Gujarat</span>
            </div>
          </div>
          <div className="text-xs sm:text-sm">Open: 9:30 AM - 7:30 PM</div>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
              GK
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Gandhi Karshan Ghela</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Since 1920</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              About Us
            </button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Products
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              Contact
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4 animate-fadeIn">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-left">
                About Us
              </button>
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-left">
                Products
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-left">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-amber-600 transition-colors font-medium text-left">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
