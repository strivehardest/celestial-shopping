// pages/products/index.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import Loading from '@/components/Loading';
import EmptyState from '@/components/EmptyState';
import Breadcrumb from '@/components/Breadcrumb';
import { ShoppingBag } from 'lucide-react';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api/store/products/';
const CATEGORY_URL = process.env.NEXT_PUBLIC_API_URL_CATEGORIES || 'http://127.0.0.1:8000/api/store/categories/';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const productsPerPage = 12;

  // 🔹 Fetch products per page
  useEffect(() => {
    async function fetchProducts(page = 1) {
      try {
        setLoading(true);
        const queryParams = new URLSearchParams({
          page,
          page_size: productsPerPage,
          search: searchTerm,
          category: selectedCategory || '',
        }).toString();

        const res = await fetch(`${BASE_URL}?${queryParams}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        setProducts(data.results || data);
        setNextPage(data.next);
        setPrevPage(data.previous);
        setTotalCount(data.count || data.results?.length || 0);
      } catch (err) {
        console.error('Error fetching products:', err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts(currentPage);
  }, [currentPage, searchTerm, selectedCategory]);

  // 🔹 Fetch categories
  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch(CATEGORY_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setCategories(data.results || data);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    }
    fetchCategories();
  }, []);

  const breadcrumbItems = [{ label: 'Products', href: null }];

  // 🔹 SEO structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "All Products - Celestial Shopping",
    "description": "Shop all premium quality products from Celestial Shopping.",
    "url": "https://www.celestialwebsolutions.net/products",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": products.length,
      "itemListElement": products.map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": product.name,
          "image": product.image,
          "offers": {
            "@type": "Offer",
            "priceCurrency": "GHS",
            "price": product.price,
            "availability":
              product.stock > 0
                ? "https://schema.org/InStock"
                : "https://schema.org/OutOfStock",
          },
        },
      })),
    },
  };

  return (
    <Layout>
      <Head>
        <title>All Products | Celestial Shopping</title>
        <meta
          name="description"
          content="Browse premium quality products from Celestial Shopping. Shop online for the best deals and fast delivery."
        />
        <meta
          name="keywords"
          content="Celestial Shopping, Ghana, online shopping, premium products, ecommerce"
        />
        <meta property="og:title" content="All Products | Celestial Shopping" />
        <meta
          property="og:description"
          content="Discover premium quality products from Celestial Shopping with fast and reliable delivery."
        />
        <meta
          property="og:image"
          content="https://www.celestialwebsolutions.net/images/products-og.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="bg-white min-h-screen py-8 text-gray-800">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} />

          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bricolage font-bold text-green-700 mb-3">
              All Products
            </h1>
            <p className="text-gray-600">Explore our full range of quality products</p>
            {!loading && (
              <p className="text-sm text-gray-500 mt-2">
                Showing {products.length} of {totalCount} products
              </p>
            )}
          </div>

          {/* Filters */}
          <div className="bg-gray-50 rounded-xl shadow-sm p-6 mb-10 border border-green-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SearchBar onSearch={setSearchTerm} placeholder="Search products..." />
              <CategoryFilter
                categories={categories}
                selected={selectedCategory}
                onSelect={setSelectedCategory}
              />
            </div>
          </div>

          {/* Product Grid */}
          {loading ? (
            <Loading message="Loading products..." />
          ) : products.length === 0 ? (
            <EmptyState
              icon={ShoppingBag}
              title="No products found"
              message="Try changing your search or filters"
            />
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center mt-10 gap-4">
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={!prevPage}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    !prevPage
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  Previous
                </button>

                <span className="text-gray-700 font-semibold">
                  Page {currentPage}
                </span>

                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={!nextPage}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    !nextPage
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}
