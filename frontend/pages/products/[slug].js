// pages/products/[slug].js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';
import QuantitySelector from '@/components/QuantitySelector';
import Button from '@/components/Button';
import Badge from '@/components/Badge';
import Breadcrumb from '@/components/Breadcrumb';
import Loading from '@/components/Loading';
import EmptyState from '@/components/EmptyState';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/Card';
import Price from '@/components/Price';
import { ShoppingBag, ArrowLeft, Star, Package, Truck, Shield } from 'lucide-react';
import { productsAPI } from '@/lib/api';
import useCartStore from '@/store/cartStore';
import toast from 'react-hot-toast';

export default function ProductDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    if (slug) {
      console.log('Fetching product with slug:', slug);
      fetchProduct();
    }
  }, [slug]);

  async function fetchProduct() {
    try {
      setLoading(true);
      setError(null);
      console.log('API call to:', `/store/products/${slug}/`);
      
      const response = await productsAPI.getBySlug(slug);
      console.log('Product data received:', response.data);
      
      setProduct(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching product:', err);
      console.error('Error response:', err.response?.data);
      
      setError(err.message);
      setLoading(false);
      toast.error('Failed to load product');
    }
  }

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
      toast.success(`Added ${quantity} ${product.name} to cart`);
    }
  };

  if (loading) {
    return (
      <Layout>
        <Head>
          <title>Loading Product | Celestial Shopping</title>
        </Head>
        <div className="container-custom py-20">
          <Loading message="Loading product..." />
        </div>
      </Layout>
    );
  }

  if (error || !product) {
    return (
      <Layout>
        <Head>
          <title>Product Not Found | Celestial Shopping</title>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <div className="container-custom py-20">
          <EmptyState 
            icon={ShoppingBag}
            title="Product Not Found"
            message={error || "The product you're looking for doesn't exist"}
            actionText="Back to Products"
            actionLink="/products"
          />
        </div>
      </Layout>
    );
  }

  // Handle category display
  const categoryName = typeof product.category === 'object' && product.category?.name 
    ? product.category.name 
    : product.category || 'Uncategorized';

  const breadcrumbItems = [
    { label: 'Products', href: '/products' },
    { label: product.name, href: null }
  ];

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.image || "https://www.celestialwebsolutions.net/images/default-product.jpg",
    "description": product.description || product.name,
    "sku": product.id,
    "brand": {
      "@type": "Brand",
      "name": "Celestial Shopping"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://www.celestialwebsolutions.net/products/${slug}`,
      "priceCurrency": "GHS",
      "price": product.price,
      "availability": product.in_stock 
        ? "https://schema.org/InStock" 
        : "https://schema.org/OutOfStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": {
        "@type": "Organization",
        "name": "Celestial Shopping"
      }
    },
    "aggregateRating": product.review_count > 0 ? {
      "@type": "AggregateRating",
      "ratingValue": product.average_rating || 0,
      "reviewCount": product.review_count || 0,
      "bestRating": "5",
      "worstRating": "1"
    } : undefined,
    "review": product.reviews?.map(review => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": review.user
      },
      "reviewBody": review.comment
    }))
  };

  return (
    <Layout>
      <Head>
        <title>{product.name} | Celestial Shopping</title>
        <meta name="description" content={product.description || `Buy ${product.name} at the best price on Celestial Shopping. ${product.in_stock ? 'In stock and ready to ship.' : 'Check availability.'}`} />
        <meta name="keywords" content={`${product.name}, ${categoryName}, buy online, celestial shopping, Ghana shopping`} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={`${product.name} | Celestial Shopping`} />
        <meta property="og:description" content={product.description || `Buy ${product.name} at the best price`} />
        <meta property="og:url" content={`https://www.celestialwebsolutions.net/products/${slug}`} />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={product.image || "https://www.celestialwebsolutions.net/images/default-product.jpg"} />
        <meta property="product:price:amount" content={product.price} />
        <meta property="product:price:currency" content="GHS" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${product.name} | Celestial Shopping`} />
        <meta name="twitter:description" content={product.description || `Buy ${product.name}`} />
        <meta name="twitter:image" content={product.image || "https://www.celestialwebsolutions.net/images/default-product.jpg"} />
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://www.celestialwebsolutions.net/products/${slug}`} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="bg-gradient-to-br from-green-50 to-white min-h-screen py-8">
        <div className="container-custom">
          <Breadcrumb items={breadcrumbItems} />

          {/* Back Button */}
          <Link 
            href="/products" 
            className="inline-flex items-center text-gray-700 hover:text-green-600 mb-6 transition-colors font-medium"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Products
          </Link>

          {/* Product Details */}
          <Card className="bg-white shadow-xl border border-green-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6">
              {/* Product Image */}
              <div className="relative">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={`${product.name} - ${categoryName}`}
                    className="w-full h-full object-cover rounded-xl shadow-lg"
                    itemProp="image"
                  />
                ) : (
                  <div className="w-full h-96 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center shadow-lg">
                    <ShoppingBag className="text-green-500" size={120} />
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div>
                {/* Category */}
                <Link 
                  href={`/products?category=${product.category?.id || ''}`}
                  className="text-green-600 font-semibold mb-2 inline-block hover:text-green-700 transition-colors"
                >
                  {categoryName}
                </Link>

                {/* Product Name */}
                <h1 className="text-4xl font-bricolage font-bold text-gray-900 mb-4" itemProp="name">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={
                          i < Math.round(product.average_rating || 0)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-700 font-medium">
                    {product.average_rating?.toFixed(1) || '0.0'} ({product.review_count || 0} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <Price amount={product.price} size="5xl" className="text-green-700" />
                </div>

                {/* Stock Status */}
                <div className="mb-6">
                  {product.in_stock ? (
                    <Badge variant="success" className="text-base px-4 py-2">
                      ✓ In Stock ({product.stock} available)
                    </Badge>
                  ) : (
                    <Badge variant="danger" className="text-base px-4 py-2">
                      ✗ Out of Stock
                    </Badge>
                  )}
                </div>

                {/* Description */}
                <div className="mb-8 bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <h3 className="text-xl font-bricolage font-bold mb-3 text-gray-900">Description</h3>
                  <p className="text-gray-700 leading-relaxed" itemProp="description">
                    {product.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6 grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <Package className="mx-auto text-green-600 mb-2" size={24} />
                    <p className="text-xs font-semibold text-gray-700">Quality Product</p>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <Truck className="mx-auto text-green-600 mb-2" size={24} />
                    <p className="text-xs font-semibold text-gray-700">Fast Delivery</p>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <Shield className="mx-auto text-green-600 mb-2" size={24} />
                    <p className="text-xs font-semibold text-gray-700">Secure Payment</p>
                  </div>
                </div>

                {/* Quantity Selector */}
                {product.in_stock && (
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Quantity
                    </label>
                    <QuantitySelector
                      quantity={quantity}
                      onIncrease={() => setQuantity(q => Math.min(q + 1, product.stock))}
                      onDecrease={() => setQuantity(q => Math.max(q - 1, 1))}
                      max={product.stock}
                    />
                  </div>
                )}

                {/* Add to Cart Button */}
                <Button
                  onClick={handleAddToCart}
                  disabled={!product.in_stock}
                  variant="primary"
                  fullWidth
                  className="text-lg py-4 bg-green-600 hover:bg-green-700 font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  {product.in_stock ? '🛒 Add to Cart' : 'Out of Stock'}
                </Button>
              </div>
            </div>
          </Card>

          {/* Reviews Section */}
          {product.reviews && product.reviews.length > 0 && (
            <Card className="mt-8 bg-white shadow-lg border border-green-100">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Customer Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex items-center mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={18}
                              className={
                                i < review.rating
                                  ? 'text-yellow-400 fill-yellow-400'
                                  : 'text-gray-300'
                              }
                            />
                          ))}
                        </div>
                        <span className="ml-3 font-semibold text-gray-900">{review.user}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
}