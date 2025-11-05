import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';
import { productsAPI } from '@/lib/api';
import ProductCard from './ProductCard';
import Loading from './Loading';

export default function Hero() {
  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchLatestProducts() {
      try {
        const response = await productsAPI.getAll({ ordering: '-created_at', limit: 2 });
        setLatestProducts(response.data.results?.slice(0, 2) || response.data.slice(0, 2));
      } catch (err) {
        console.error('Failed to fetch latest products:', err);
        setError('Unable to load latest products at the moment.');
      } finally {
        setLoading(false);
      }
    }
    fetchLatestProducts();
  }, []);

  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Section - Intro */}
          <div className="flex-1 space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bricolage font-bold text-gray-900 leading-tight">
              Welcome to{' '}
              <span className="text-green-600">Celestial</span>
              <br />
              Shopping
            </h1>
            <p className="text-xl text-gray-700 max-w-xl">
              Discover premium products that elevate your lifestyle. Quality, style, and convenience — all in one place.
            </p>
            <div className="flex gap-4">
              <Link
                href="/products"
                className="btn-primary bg-green-600 hover:bg-green-700 text-white"
              >
                Shop Now
              </Link>
              <Link
                href="/about"
                className="btn-outline border-green-600 text-green-600 hover:bg-green-50"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Section - Latest Products */}
          <div className="flex-1 animate-slide-up animation-delay-200 w-full">
            <h2 className="text-2xl font-bricolage font-semibold text-green-700 mb-6 text-center md:text-left">
              Latest Products
            </h2>

            {loading && <Loading message="Loading latest products..." />}

            {error && (
              <div className="text-center text-red-600 py-4">{error}</div>
            )}

            {!loading && !error && latestProducts.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {latestProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

            {!loading && !error && latestProducts.length === 0 && (
              <div className="flex flex-col items-center justify-center h-64 bg-green-100 rounded-3xl">
                <ShoppingBag className="text-green-500 mb-4" size={60} />
                <p className="text-gray-700">No products available yet</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
