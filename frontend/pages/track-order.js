// pages/track-order.js
import { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Loading from '@/components/Loading';
import { Package, Search, CheckCircle, Truck, MapPin, Clock, Mail } from 'lucide-react';
import toast from 'react-hot-toast';

export default function TrackOrderPage() {
  const [email, setEmail] = useState('');
  const [trackingId, setTrackingId] = useState('');
  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const [error, setError] = useState('');

  const handleTrackOrder = async (e) => {
    e.preventDefault();
    setError('');
    setOrderData(null);

    // Validation
    if (!email || !trackingId) {
      setError('Please provide both email and tracking ID');
      toast.error('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      toast.error('Invalid email address');
      return;
    }

    setLoading(true);

    try {
      // TODO: Replace with your actual API endpoint
      // const response = await fetch(`/api/orders/track`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, trackingId })
      // });
      // const data = await response.json();

      // Mock response for demonstration (remove this in production)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulated order data (replace with actual API response)
      const mockData = {
        trackingId: trackingId,
        email: email,
        orderNumber: `ORD-${Math.floor(Math.random() * 100000)}`,
        status: 'in_transit',
        orderDate: '2025-10-20',
        estimatedDelivery: '2025-10-28',
        currentLocation: 'Accra Distribution Center',
        items: [
          { name: 'Premium Headphones', quantity: 1, price: 149.99 },
          { name: 'Wireless Mouse', quantity: 2, price: 29.99 }
        ],
        timeline: [
          { status: 'Order Placed', date: '2025-10-20', time: '10:30 AM', completed: true },
          { status: 'Order Confirmed', date: '2025-10-20', time: '11:45 AM', completed: true },
          { status: 'Shipped', date: '2025-10-21', time: '09:15 AM', completed: true },
          { status: 'In Transit', date: '2025-10-24', time: '02:30 PM', completed: true },
          { status: 'Out for Delivery', date: null, time: null, completed: false },
          { status: 'Delivered', date: null, time: null, completed: false }
        ]
      };

      setOrderData(mockData);
      toast.success('Order found successfully!');
    } catch (err) {
      console.error('Error tracking order:', err);
      setError('Unable to find order. Please check your details and try again.');
      toast.error('Order not found');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      confirmed: 'bg-blue-100 text-blue-800 border-blue-200',
      shipped: 'bg-purple-100 text-purple-800 border-purple-200',
      in_transit: 'bg-green-100 text-green-800 border-green-200',
      out_for_delivery: 'bg-orange-100 text-orange-800 border-orange-200',
      delivered: 'bg-green-600 text-white border-green-700',
      cancelled: 'bg-red-100 text-red-800 border-red-200'
    };
    return colors[status] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getStatusText = (status) => {
    const statusTexts = {
      pending: 'Order Pending',
      confirmed: 'Order Confirmed',
      shipped: 'Shipped',
      in_transit: 'In Transit',
      out_for_delivery: 'Out for Delivery',
      delivered: 'Delivered',
      cancelled: 'Cancelled'
    };
    return statusTexts[status] || status;
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Track Your Order - Celestial Shopping",
    "description": "Track your order status with Celestial Shopping using your email and tracking ID",
    "url": "https://www.celestialwebsolutions.net/track-order"
  };

  return (
    <Layout>
      <Head>
        <title>Track Your Order | Celestial Shopping</title>
        <meta 
          name="description" 
          content="Track your order status with Celestial Shopping. Enter your email and tracking ID to view real-time updates on your delivery." 
        />
        <meta name="keywords" content="track order, order tracking, delivery status, Celestial Shopping, Ghana delivery" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Track Your Order | Celestial Shopping" />
        <meta property="og:description" content="Track your order status and get real-time delivery updates" />
        <meta property="og:url" content="https://www.celestialwebsolutions.net/track-order" />
        <meta property="og:type" content="website" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.celestialwebsolutions.net/track-order" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="bg-gradient-to-br from-green-50 to-white min-h-screen py-12">
        <div className="container-custom max-w-4xl">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
              <Package className="text-green-600" size={40} />
            </div>
            <h1 className="text-4xl font-bricolage font-bold text-gray-900 mb-3">
              Track Your Order
            </h1>
            <p className="text-gray-600 text-lg">
              Enter your email and tracking ID to view your order status
            </p>
          </div>

          {/* Tracking Form */}
          <Card className="bg-white shadow-xl border border-green-100 mb-8">
            <form onSubmit={handleTrackOrder} className="space-y-6">
              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold text-black-900 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Tracking ID Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Tracking ID
                </label>
                <div className="relative">
                  <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value.toUpperCase())}
                    placeholder="e.g., TRK123456789"
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent uppercase"
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                  <p className="text-red-800 font-medium">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                fullWidth
                disabled={loading}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 text-lg"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Tracking Order...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Search className="mr-2" size={20} />
                    Track Order
                  </span>
                )}
              </Button>
            </form>
          </Card>

          {/* Loading State */}
          {loading && (
            <div className="py-8">
              <Loading message="Searching for your order..." />
            </div>
          )}

          {/* Order Details */}
          {orderData && !loading && (
            <div className="space-y-6">
              {/* Order Summary */}
              <Card className="bg-white shadow-lg border border-green-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bricolage font-bold text-gray-900">
                      Order #{orderData.orderNumber}
                    </h2>
                    <p className="text-gray-600 mt-1">
                      Placed on {new Date(orderData.orderDate).toLocaleDateString('en-US', { 
                        year: 'numeric', month: 'long', day: 'numeric' 
                      })}
                    </p>
                  </div>
                  <div className={`px-4 py-2 rounded-full border-2 font-bold ${getStatusColor(orderData.status)}`}>
                    {getStatusText(orderData.status)}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-green-600 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-gray-900">Current Location</p>
                      <p className="text-gray-700">{orderData.currentLocation}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="text-green-600 mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-gray-900">Estimated Delivery</p>
                      <p className="text-gray-700">
                        {new Date(orderData.estimatedDelivery).toLocaleDateString('en-US', { 
                          year: 'numeric', month: 'long', day: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Tracking Timeline */}
              <Card className="bg-white shadow-lg border border-green-100">
                <h3 className="text-xl font-bricolage font-bold text-gray-900 mb-6">
                  Order Timeline
                </h3>
                <div className="space-y-4">
                  {orderData.timeline.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex flex-col items-center mr-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          step.completed 
                            ? 'bg-green-600' 
                            : 'bg-gray-300'
                        }`}>
                          {step.completed ? (
                            <CheckCircle className="text-white" size={24} />
                          ) : (
                            <div className="w-3 h-3 bg-white rounded-full" />
                          )}
                        </div>
                        {index < orderData.timeline.length - 1 && (
                          <div className={`w-0.5 h-16 ${
                            step.completed ? 'bg-green-600' : 'bg-gray-300'
                          }`} />
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <p className={`font-bold ${
                          step.completed ? 'text-gray-900' : 'text-gray-400'
                        }`}>
                          {step.status}
                        </p>
                        {step.date && (
                          <p className="text-sm text-gray-600 mt-1">
                            {new Date(step.date).toLocaleDateString('en-US', { 
                              month: 'short', day: 'numeric', year: 'numeric' 
                            })} at {step.time}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Order Items */}
              <Card className="bg-white shadow-lg border border-green-100">
                <h3 className="text-xl font-bricolage font-bold text-gray-900 mb-6">
                  Order Items
                </h3>
                <div className="space-y-4">
                  {orderData.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                      <div>
                        <p className="font-semibold text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                      <p className="font-bold text-green-700">
                        GH₵{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}