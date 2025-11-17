
import { recipes } from '../data/recipes';

export default function RecipesPage() {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-green-100 to-amber-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Recipes Gallery</h2>
          <p className="text-gray-600 mt-2">All recipes shown as photos. Click to view full image.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {recipes.map((r, i) => (
            <a key={i} href={r.src} target="_blank" rel="noreferrer" className="block rounded overflow-hidden shadow hover:scale-105 transition transform">
              <img src={r.src} alt={r.alt} className="w-full h-40 object-cover" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
