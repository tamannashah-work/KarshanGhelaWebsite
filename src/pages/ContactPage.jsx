import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <div className="pt-32 pb-16">
      <section className="py-12 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              We'd love to hear from you. Visit our store, call us, or send us a message.
            </p>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
}
