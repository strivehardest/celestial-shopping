'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import EmptyState from '@/components/EmptyState';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import useCartStore from '@/store/cartStore';

export default function CartPage() {
  const [isClient, setIsClient] = useState(false);

  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const getTotal = useCartStore((state) => state.getTotal);

  useEffect(() => setIsClient(true), []);

  if (!isClient) {
    return (
      <Layout>
        <Head>
          <title>Loading Your Cart | Celestial Shopping</title>
          <meta name="description" content="Loading your shopping cart on Celestial Shopping." />
        </Head>
        <div className="container-custom py-20 text-center text-gray-600">
          Loading your cart...
        </div>
      </Layout>
    );
  }

  const total = getTotal();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };

  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "ShoppingCart",
    "name": "Celestial Shopping Cart",
    "url": "https://www.celestialwebsolutions.net/cart",
    "itemListElement": items.map((item, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": item.name,
      "image": item.image,
      "offers": {
        "@type": "Offer",
        "priceCurrency": "GHS",
        "price": item.price,
        "availability": "https://schema.org/InStock",
      }
    })),
    "totalPrice": total,
  };

  if (items.length === 0) {
    return (
      <Layout>
        <Head>
          <title>Your Cart is Empty | Celestial Shopping</title>
          <meta
            name="description"
            content="Your cart is empty. Add some quality Celestial products to start shopping today."
          />
        </Head>

        <div className="container-custom py-20">
          <EmptyState
            icon={ShoppingBag}
            title="Your Cart is Empty"
            message="Add some products to get started!"
            actionText="Browse Products"
            actionLink="/products"
          />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>Your Shopping Cart | Celestial Shopping</title>
        <meta
          name="description"
          content="Manage your shopping cart with Celestial Shopping. Add or remove products and enjoy secure checkout."
        />
        <meta property="og:title" content="Your Shopping Cart | Celestial Shopping" />
        <meta property="og:description" content="View and manage products in your Celestial Shopping cart." />
        <meta property="og:url" content="https://www.celestialwebsolutions.net/cart" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/cart-preview.jpg" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      {/* Green Background Section */}
      <div className="bg-gradient-to-br from-green-50 to-white min-h-screen py-8">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bricolage font-bold text-green-700">
              Shopping Cart
            </h1>
            <button
              onClick={clearCart}
              className="text-red-600 hover:text-red-700 font-medium transition-colors"
            >
              Clear Cart
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={item.id} className="shadow-md hover:shadow-lg transition-all">
                  <div className="flex items-center gap-6">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-lg border border-green-200"
                        />
                      ) : (
                        <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                          <ShoppingBag className="text-green-500" size={32} />
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <Link
                        href={`/products/${item.slug}`}
                        className="font-bricolage font-bold text-lg hover:text-green-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                      <p className="text-gray-600 text-sm mt-1">
                        {typeof item.category === 'object' && item.category?.name 
                          ? item.category.name 
                          : item.category || 'Uncategorized'}
                      </p>
                      <p className="text-green-600 font-bold text-xl mt-2">
                        GH₵{parseFloat(item.price).toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="w-8 h-8 bg-green-100 hover:bg-green-200 rounded-lg flex items-center justify-center transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={16} className="text-green-600" />
                      </button>
                      <span className="text-lg font-bold w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="w-8 h-8 bg-green-100 hover:bg-green-200 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <Plus size={16} className="text-green-600" />
                      </button>
                    </div>

                    {/* Subtotal */}
                    <div className="text-right hidden md:block">
                      <p className="text-sm text-gray-600 mb-1">Subtotal</p>
                      <p className="text-2xl font-bold text-green-700">
                        GH₵{(parseFloat(item.price) * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-700 transition-colors"
                      aria-label="Remove item from cart"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 border-green-200 shadow-lg">
                <h2 className="text-2xl font-bricolage font-bold mb-6 text-green-700">
                  Order Summary
                </h2>

                <div className="space-y-3 mb-6 text-gray-700">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>GH₵{total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Tax (10%)</span>
                    <span>GH₵{(total * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span className="text-green-700">
                        GH₵{(total * 1.1).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <Link href="/checkout">
                  <Button
                    variant="primary"
                    fullWidth
                    className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-center"
                  >
                    Proceed to Checkout
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>

                {/* Add Products Button */}
                <Link
                  href="/products"
                  className="mt-4 block text-center font-medium text-green-600 hover:text-green-700 transition-colors"
                >
                  + Add More Products
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}