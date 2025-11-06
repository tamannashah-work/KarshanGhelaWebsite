const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export async function getAllProducts() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/products`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export async function getFeaturedProducts() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/products/featured`);
    if (!response.ok) {
      throw new Error('Failed to fetch featured products');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching featured products:', error);
    throw error;
  }
}
