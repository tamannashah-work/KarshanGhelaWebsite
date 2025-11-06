import { MapPin, Phone, Mail, Facebook, Instagram, Clock, MessageCircle } from 'lucide-react';

export default function Footer() {
  const handleWhatsApp = () => {
    const phoneNumber = '919825459761';
    const message = 'Hello! I would like to know more about your products.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="logo.png"
                className="w-12 h-12flex items-center justify-center text-white font-bold text-xl shadow-lg"/>
              <div>
                <h3 className="text-white title text-xl font-bold"> Karshan Ghela</h3>
                <p className="text-sm text-amber-500">Serving Taste & Flavor Since 1920</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              A heritage spice shop offering premium Indian masalas, spices, and traditional products with over 100 years of excellence.
            </p>
          </div>

          <div>
            <h4 className="text-white title text-lg font-semibold mb-4">Contact Info</h4>
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
            <h4 className="text-white title text-lg font-bold mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-6">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/karshan_ghela"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <button
                onClick={handleWhatsApp}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <MessageCircle size={20} />
              </button>
            </div>
            <button
              onClick={handleWhatsApp}
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors text-sm font-medium mb-3 w-full"
            >
              <MessageCircle size={16} className="inline mr-2" />
              Chat on WhatsApp
            </button>
            <a
              href="#"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg transition-colors text-sm font-medium w-full text-center"
            >
              Download Catalog
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()}  Karshan Ghela. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
