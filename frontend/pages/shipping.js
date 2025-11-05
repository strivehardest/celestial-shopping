import Head from 'next/head';
import Layout from '@/components/Layout';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/Card';
import { Truck, Package, MapPin, Clock, CheckCircle } from 'lucide-react';

export default function ShippingPage() {
  const shippingMethods = [
    {
      icon: Truck,
      title: 'Standard Delivery',
      time: '3–5 Business Days',
      cost: 'Free on orders over GH₵200',
      description: 'Delivered to your doorstep by our trusted logistics partners.',
    },
    {
      icon: Package,
      title: 'Express Delivery',
      time: '1–2 Business Days',
      cost: 'GH₵150',
      description: 'Priority handling for urgent orders across major cities.',
    },
    {
      icon: MapPin,
      title: 'Pickup Points',
      time: 'Next Day',
      cost: 'Free',
      description: 'Collect your items from any of our verified partner locations.',
    },
  ];

  const deliverySteps = [
    'Order Confirmation — You receive an instant email after checkout.',
    'Processing — We prepare your items within 1–2 hours.',
    'Shipped — Your order is dispatched with tracking details.',
    'Out for Delivery — Our delivery team is on the way to you.',
    'Delivered — Enjoy your Celestial Shopping experience!',
  ];

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>Shipping Information | Celestial Shopping - Fast & Reliable Delivery</title>
        <meta
          name="description"
          content="Learn about Celestial Shopping's shipping options, delivery times, and coverage across Ghana. Free standard delivery for orders above GH₵200."
        />
        <meta
          name="keywords"
          content="shipping Ghana, delivery Accra, express delivery, free shipping Ghana, Celestial Shopping delivery"
        />
        <meta property="og:title" content="Shipping Information | Celestial Shopping" />
        <meta
          property="og:description"
          content="Fast, affordable, and reliable delivery across Ghana. Free delivery for orders above GH₵200."
        />
        <link rel="canonical" href="https://celestialshopping.com/shipping" />
      </Head>

      <Layout>
        <div className="bg-white min-h-screen py-12 text-gray-900">
          <div className="container-custom">
            
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <Truck className="text-white" size={40} />
              </div>
              <h1 className="text-5xl font-bricolage font-bold text-green-700 mb-4">
                Shipping Information
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                Fast, reliable, and affordable delivery options across Ghana
              </p>
            </div>

            {/* Shipping Methods */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {shippingMethods.map((method, index) => (
                <Card
                  key={index}
                  className="text-center border border-green-200 hover:shadow-lg transition-all duration-200 bg-white"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="text-green-700" size={32} />
                  </div>
                  <h3 className="font-bricolage text-xl font-bold mb-2 text-gray-900">
                    {method.title}
                  </h3>
                  <p className="text-green-700 font-semibold text-lg mb-2">
                    {method.time}
                  </p>
                  <p className="text-green-600 font-semibold mb-3">
                    {method.cost}
                  </p>
                  <p className="text-gray-700 text-sm">{method.description}</p>
                </Card>
              ))}
            </div>

            {/* Delivery Coverage */}
            <Card className="mb-12 border border-green-200 bg-white">
              <CardHeader>
                <CardTitle className="text-green-700 font-bold">Delivery Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bricolage font-bold text-lg mb-4 text-green-700">
                      Major Cities (Free Delivery over GH₵200)
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <CheckCircle className="text-green-600 mr-2" size={18} /> Accra & Greater Accra Region
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="text-green-600 mr-2" size={18} /> Kumasi & Ashanti Region
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="text-green-600 mr-2" size={18} /> Takoradi & Western Region
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="text-green-600 mr-2" size={18} /> Cape Coast & Central Region
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bricolage font-bold text-lg mb-4 text-green-700">
                      Other Regions
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <CheckCircle className="text-green-600 mr-2" size={18} /> Northern, Upper East & Upper West
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="text-green-600 mr-2" size={18} /> Volta & Eastern Regions
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="text-green-600 mr-2" size={18} /> Brong Ahafo & Bono Regions
                      </li>
                      <li className="flex items-center text-green-700 text-sm">
                        <Clock className="mr-2" size={16} /> May take 5–7 business days
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Tracking */}
            <Card className="mb-12 border border-green-200 bg-white">
              <CardHeader>
                <CardTitle className="text-green-700 font-bold">Track Your Order</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {deliverySteps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 mr-4">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800 font-medium">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-green-50 border-l-4 border-green-600 rounded-lg">
                  <p className="text-gray-800">
                    <strong className="text-green-700">Track your order:</strong> Log in to your account or
                    use the tracking link sent to your email to view real-time updates.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Important Notes */}
            <Card className="border border-green-200 bg-white">
              <CardHeader>
                <CardTitle className="text-green-700 font-bold">Important Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-800">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Processing Time</h4>
                    <p>Orders are processed within 1–2 business hours during working days (Mon–Sat, 9AM–6PM).</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Order Cutoff</h4>
                    <p>Orders placed after 3PM will be processed the next business day.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Public Holidays</h4>
                    <p>No deliveries on public holidays. Your order will be delivered the next working day.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Contact Support</h4>
                    <p>
                      For shipping queries, contact us at{' '}
                      <a href="tel:+233245671832" className="text-green-700 hover:underline">
                        +233 245 671 832
                      </a>{' '}
                      or{' '}
                      <a href="mailto:shipping@celestialshopping.com" className="text-green-700 hover:underline">
                        shipping@celestialshopping.com
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Layout>
    </>
  );
}
