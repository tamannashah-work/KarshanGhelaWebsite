
import { useEffect, useState } from 'react';

export default function RecipesPage() {
  const [recipeImages, setRecipeImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch recipe images from the public/images/recipes folder
    const fetchRecipeImages = async () => {
      try {
        // This is a placeholder - in a real app, you would need to:
        // 1. Either have a server endpoint that returns the list of images
        // 2. Or use require.context if using webpack
        // For now, we'll use a placeholder approach
        
        // In a real implementation, you would get this list from your backend
        // or use a build-time solution like require.context
        const mockImages = [
          { src: '/images/recipes/recipe1.jpg', alt: 'Recipe 1' },
          { src: '/images/recipes/recipe2.jpg', alt: 'Recipe 2' },
          // Add more recipe images as needed
        ];
        
        setRecipeImages(mockImages);
      } catch (error) {
        console.error('Error loading recipe images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeImages();
  }, []);

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-green-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Recipes</h1>
          <p className="text-gray-600 text-lg">Explore our collection of delicious recipes</p>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
          </div>
        ) : recipeImages.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No recipe images found. Please add some recipes to the public/images/recipes folder.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recipeImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <a href={image.src} target="_blank" rel="noopener noreferrer" className="block">
                  <img 
                    src={image.src} 
                    alt={image.alt || `Recipe ${index + 1}`} 
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/placeholder-recipe.jpg'; // Fallback image
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Recipe
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Want to see more recipes?</p>
          <a 
            href="/contact" 
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
