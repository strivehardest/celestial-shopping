import axios from 'axios';

// Base API configuration
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/store',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Enhanced Error Handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    let message = 'An error occurred';

    if (error.response) {
      // Backend responded with a status code (e.g., 400, 404, 500)
      message =
        error.response.data?.message ||
        error.response.statusText ||
        `Server error (${error.response.status})`;
    } else if (error.request) {
      // No response received — likely network or CORS issue
      message = 'No response from the server. Please check your backend connection.';
    } else {
      // Something else went wrong in setting up the request
      message = error.message;
    }

    console.error('API Error:', message);
    return Promise.reject(new Error(message));
  }
);

// Products API endpoints
export const productsAPI = {
  getAll: (params) => api.get('/products/', { params }),
  getBySlug: (slug) => api.get(`/products/${slug}/`),  // Fixed: removed reference to undefined 'endpoints'
  getOne: (slug) => api.get(`/products/${slug}/`),
  search: (query) => api.get('/products/', { params: { search: query } }),
  getByCategory: (categoryId) =>
    api.get('/products/', { params: { category: categoryId } }),
  getCategories: () => api.get('/categories/'),
  // Removed: productDetail method (it was redundant and appeared to be a URL pattern, not an API call)
};

export default api;