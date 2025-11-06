const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export async function getActiveTestimonials() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/testimonials`);
    if (!response.ok) {
      throw new Error('Failed to fetch testimonials');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw error;
  }
}
