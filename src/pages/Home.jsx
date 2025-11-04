import Hero from '../components/Hero';
import ProductCarousel from '../components/ProductCarousel';
import OnTheShelf from '../components/OnTheShelf';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="py-16 bg-white   bg-gradient-to-br from-green-100 to-green-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl title md:text-4xl title text-gray-900 mb-6">
              Welcome to Karshan Ghela
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              For over a century, we've been serving authentic Indian spices and traditional products
              with unwavering commitment to quality. Experience the heritage of flavor that has been
              passed down through generations.
            </p>
          </div>
        </div>
      </div>
      <OnTheShelf />
      <ProductCarousel />
      <Products />
      <Testimonials />
      <Contact title="Get In Touch" map={false}  />
    </>
  );
}
