import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import Loading from '@/components/Loading';
import Card from '@/components/Card';
import { ShoppingBag, Truck, Shield, Heart, Percent, ArrowRight } from 'lucide-react';
import { productsAPI } from '@/lib/api';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await productsAPI.getAll({ ordering: '-created_at' });
        setProducts(response.data.results || response.data);
      } catch (err) {
        console.error('Failed to load products:', err);
        setError('Unable to fetch products at the moment.');
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const features = [
    {
      icon: ShoppingBag,
      title: 'Wide Selection',
      description: 'Thousands of products to choose from',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Get your orders delivered quickly',
    },
    {
      icon: Shield,
      title: 'Secure Payment',
      description: 'Your transactions are safe with us',
    },
    {
      icon: Heart,
      title: 'Customer Care',
      description: '24/7 support for your needs',
    },
  ];

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Celestial Shopping",
    "url": "https://www.celestialwebsolutions.net",
    "description": "Premium online store in Ghana offering fast delivery, secure payments, and outstanding customer service",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.celestialwebsolutions.net/products?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Celestial Shopping",
    "url": "https://www.celestialwebsolutions.net",
    "logo": "https://www.celestialwebsolutions.net/images/logo.png",
    "description": "Ghana's premier online shopping destination",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GH"
    },
    "sameAs": [
      "https://www.facebook.com/celestialshopping",
      "https://www.twitter.com/celestialshopping",
      "https://www.instagram.com/celestialshopping"
    ]
  };

  return (
    <Layout>
      <Head>
        <title>Celestial Shopping | Premium Online Store in Ghana</title>
        <meta
          name="description"
          content="Shop the best products online with Celestial Shopping — offering fast delivery, secure payments, and outstanding customer service across Ghana. Browse our wide selection today!"
        />
        <meta
          name="keywords"
          content="Celestial Shopping, online store Ghana, Ghana e-commerce, buy products online, Celestial Web Solutions, fast delivery, secure shopping, online shopping Ghana, best prices"
        />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Celestial Shopping | Premium Online Store in Ghana" />
        <meta property="og:description" content="Shop the best products online with fast delivery, secure payments, and outstanding customer service across Ghana." />
        <meta property="og:url" content="https://www.celestialwebsolutions.net" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.celestialwebsolutions.net/images/og-home.jpg" />
        <meta property="og:site_name" content="Celestial Shopping" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Celestial Shopping | Premium Online Store in Ghana" />
        <meta name="twitter:description" content="Shop the best products online with fast delivery and secure payments." />
        <meta name="twitter:image" content="https://www.celestialwebsolutions.net/images/twitter-home.jpg" />
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Celestial Web Solutions" />
        <link rel="canonical" href="https://www.celestialwebsolutions.net" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
      </Head>

      {/* Hero Section */}
      <Hero />

      {/* Promotional Flyer Section */}
      <section className="py-12 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Left Side - Text Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-green-50 to-white">
                <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-4 w-fit">
                  <Percent size={16} className="mr-2" />
                  LIMITED TIME OFFER
                </div>
                <h2 className="text-4xl md:text-5xl font-bricolage font-bold text-gray-900 mb-4">
                  Weekend Sale!
                </h2>
                <p className="text-xl md:text-2xl text-green-600 font-bold mb-4">
                  Up to 50% OFF
                </p>
                <p className="text-gray-700 text-lg mb-6">
                  Shop our amazing collection of premium products at unbeatable prices. 
                  Hurry, limited stock available!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/products" 
                    className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
                  >
                    Shop Now
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                  <Link 
                    href="/products?category=deals" 
                    className="inline-flex items-center justify-center border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold px-8 py-4 rounded-lg transition-all"
                  >
                    View Deals
                  </Link>
                </div>
              </div>
              
              {/* Right Side - Image/Visual */}
              <div className="relative bg-gradient-to-br from-green-100 to-green-200 min-h-[300px] md:min-h-[400px]">
                {/* Replace this div with your actual promotional image */}
                <img
                  src="/images/promotion-banner.jpg"
                  alt="Weekend Sale - Up to 50% OFF on Premium Products"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="absolute inset-0 flex items-center justify-center">
                        <div class="text-center p-8">
                          <div class="text-6xl font-bold text-green-600 mb-4">50%</div>
                          <div class="text-2xl font-bold text-gray-900">OFF</div>
                        </div>
                      </div>
                    `;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white text-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bricolage font-bold text-green-700 mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our handpicked selection of premium products, carefully chosen just for you
            </p>
          </div>

          {loading && <Loading message="Loading products..." />}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-600 text-lg font-medium">{error}</p>
            </div>
          )}

          {!loading && !error && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.slice(0, 4).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              <div className="text-center mt-12">
                <Link 
                  href="/products" 
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl text-lg"
                >
                  View All Products
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Why Shop With Us Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white text-gray-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bricolage font-bold text-green-700 mb-4">
              Why Shop With Us
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the best online shopping with our commitment to quality and service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <feature.icon className="text-green-600" size={32} />
                </div>
                <h3 className="font-bricolage text-xl font-bold text-green-700 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bricolage font-bold mb-4">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Join thousands of satisfied customers and enjoy the best online shopping experience in Ghana
          </p>
          <Link 
            href="/products" 
            className="inline-flex items-center bg-white text-green-600 hover:bg-green-50 font-bold px-10 py-4 rounded-lg transition-all shadow-xl hover:shadow-2xl text-lg"
          >
            Browse Products
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}