import { Menu, X, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="relative w-full shadow-md z-50">
      {/* Orange bar with logo overlay */}
      <div className="relative bg-amber-600 h-12 sm:h-10 flex items-center justify-between px-4 sm:px-8">
        {/* Logo overlapping the bar */}
        <div className="relative md:pt-12 md:mt-4 z-20">
          <Link to="/">
            <img
              src="images/Karshan-Ghela-Logo-wob-1-150x150.png"
              alt="Karshan Ghela Logo"
              className="w-20 sm:w-24 h-auto "
            />
          </Link>
        </div>

        {/* Contact info (hidden on mobile) */}
        <div className="hidden md:flex ml-auto items-center gap-6 text-white text-sm font-medium">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <a href="tel:+919825459761" className="hover:underline">
              +91 98254 59761
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Navsari, Gujarat</span>
          </div>
          <span>Open: 9:30 AM - 7:30 PM</span>
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden text-white ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-white border-t border-gray-200">
        <div className="flex justify-end items-center px-8 py-5 space-x-10">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/products", label: "Products" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`font-medium transition-colors ${
                isActive(to)
                  ? "text-amber-600"
                  : "text-gray-800 hover:text-amber-600"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col items-end px-6 py-4 space-y-3">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/products", label: "Products" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium transition-colors ${
                  isActive(to)
                    ? "text-amber-600"
                    : "text-gray-800 hover:text-amber-600"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
