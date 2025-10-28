import { MapPin, Phone, Mail, Facebook, Instagram, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                GK
              </div>
              <div>
                <h3 className="text-white text-xl font-bold">Gandhi Karshan Ghela</h3>
                <p className="text-sm text-amber-500">Serving Taste & Flavor Since 1920</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              A heritage spice shop offering premium Indian masalas, spices, and traditional products with over 100 years of excellence.
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-500 flex-shrink-0 mt-1" />
                <p className="text-sm">
                  G-2/3, Vastupal Apartment Dadangwad,<br />
                  Mota Bazaar Road, Madhumati Colony,<br />
                  Navsari, Gujarat - 396445
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-amber-500 flex-shrink-0" />
                <a href="tel:+919825459761" className="text-sm hover:text-amber-500 transition-colors">
                  +91 98254 59761
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-amber-500 flex-shrink-0" />
                <span className="text-sm">9:30 AM - 7:30 PM</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
            <a
              href="#"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg transition-colors text-sm font-medium"
            >
              Download Catalog
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Gandhi Karshan Ghela. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
