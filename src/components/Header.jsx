import { Menu, X, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

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
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
              GK
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Gandhi Karshan Ghela</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Since 1920</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`transition-colors font-medium ${isActive('/') ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors font-medium ${isActive('/about') ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'}`}
            >
              About Us
            </Link>
            <Link
              to="/products"
              className={`transition-colors font-medium ${isActive('/products') ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'}`}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className={`transition-colors font-medium ${isActive('/contact') ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'}`}
            >
              Contact
            </Link>
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
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`transition-colors font-medium text-left ${isActive('/') ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`transition-colors font-medium text-left ${isActive('/about') ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'}`}
              >
                About Us
              </Link>
              <Link
                to="/products"
                onClick={() => setIsMenuOpen(false)}
                className={`transition-colors font-medium text-left ${isActive('/products') ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'}`}
              >
                Products
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`transition-colors font-medium text-left ${isActive('/contact') ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'}`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
