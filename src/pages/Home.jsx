import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Welcome to Gandhi Karshan Ghela
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              For over a century, we've been serving authentic Indian spices and traditional products
              with unwavering commitment to quality. Experience the heritage of flavor that has been
              passed down through generations.
            </p>
          </div>
        </div>
      </div>
      <Products />
      <Testimonials />
      <Contact />
    </>
  );
}
