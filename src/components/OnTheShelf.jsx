import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Custom arrow components
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-10 right-4`}
      style={{ ...style, background: "rgba(251, 146, 60, 0.9)", borderRadius: "50%", padding: "10px", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 5px rgba(0,0,0,0.2)" }}
      onClick={onClick}
    >
      <ChevronRight className="text-black" size={24} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-10 left-4`}
      style={{ ...style, background: "rgba(251, 146, 60, 0.9)", borderRadius: "50%", padding: "10px", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 5px rgba(0,0,0,0.2)" }}
      onClick={onClick}
    >
      <ChevronLeft className="text-black" size={24} />
    </div>
  );
};

export default function OnTheShelf() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280, // xl
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const products = [
    {
      name: 'All In One Masala',
      category: 'Multi-Purpose Masala',
      image: '/images/new on the shelf/all_in_one_masala.jpg'
    },
    {
      name: 'Magajtari Rabdi',
      category: 'Multi-Purpose Masala',
      image: '/images/new on the shelf/magajtari_rabdi.jpg'
    },
    {
      name: 'Mutton Tapela Masala',
      category: 'Non-Veg Masala',
      image: '/images/new on the shelf/mutton_tapela_masala.jpg'
    },
    {
      name: 'Dal Ghost Masala',
      category: 'Non-Veg Masala',
      image: '/images/new on the shelf/dal_ghost_masala.jpg'
    },
    {
      name: 'Dum Aaloo Masala',
      category: 'Veg Masala',
      image: '/images/new on the shelf/dum_aaloo_masala.jpg'
    },
    {
      name: 'Egg Ghotala Masala',
      category: 'Non-Veg Masala',
      image: '/images/new on the shelf/egg_ghotala_masala.jpg'
    },
    {
      name: 'Maggi Noodles Masala',
      category: 'Instant Masala',
      image: '/images/new on the shelf/maggi_noodles_msala.jpg'
    },
    {
      name: 'Malvani Chicken Masala',
      category: 'Non-Veg Masala',
      image: '/images/new on the shelf/malvani_chicken_masala.jpg'
    },
    {
      name: 'Mughlai Mutton Masala',
      category: 'Non-Veg Masala',
      image: '/images/new on the shelf/mughlai_mutton_masala.jpg'
    },
    {
      name: 'Nawabi Chicken Masala',
      category: 'Non-Veg Masala',
      image: '/images/new on the shelf/nawabi_chicken_masala.jpg'
    },
    {
      name: 'Peri Peri Seasoning',
      category: 'Seasoning Masala',
      image: '/images/new on the shelf/peri_peri_seasoning_masala.jpg'
    },
    {
      name: 'Pizza Gravy Masala',
      category: 'Veg Masala',
      image: '/images/new on the shelf/pizza_gravy_masala.jpg'
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-amber-100 to-orange-100">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-16">
          <h2 className="text-2xl title sm:text-3xl font-bold md:text-4xl text-gray-900 mb-3 sm:mb-4">
            New On The Shelf
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-amber-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Discover our latest and most popular products
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative">
          <Slider {...settings} className="py-6">
  {products.map((product, idx) => (
    <div key={idx} className="px-2 outline-none h-full">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 mx-2 h-full flex flex-col w-64"> {/* Added fixed width */}
        <div className="h-80 overflow-hidden flex-shrink-0"> {/* Increased height to h-80 */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            style={{ minHeight: '100%', objectPosition: 'center' }}
            loading="lazy"
          />
        </div>
        <div className="p-3 flex-1 flex flex-col"> {/* Reduced padding */}
          <div className="flex justify-between items-start">
            <h3 className="text-sm font-semibold text-gray-800 line-clamp-2" title={product.name}>{product.name}</h3>
            <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full whitespace-nowrap ml-2">
              {product.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  ))}
</Slider>

        </div>
      </div>
    </section>
  );
}