import Head from 'next/head';
import Layout from '@/components/Layout';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/Card';
import Alert from '@/components/Alert';
import {
  RotateCcw,
  DollarSign,
  Clock,
  AlertCircle,
  CheckCircle,
  XCircle,
} from 'lucide-react';

export default function ReturnsPage() {
  const returnSteps = [
    'Contact our support team within 14 days of delivery.',
    'Provide your order number and reason for return.',
    'Pack the item securely in its original packaging.',
    'Ship to our returns address (we provide a prepaid label).',
    'Receive your refund within 5–7 business days.',
  ];

  const eligibleItems = [
    'Unopened products in original packaging.',
    'Items with tags still attached.',
    'Defective or damaged items.',
    'Wrong items sent by mistake.',
  ];

  const nonEligibleItems = [
    'Items used or damaged by customer.',
    'Products without original packaging.',
    'Items purchased on clearance sale.',
    'Personalized or custom items.',
    'Opened electronics or software.',
  ];

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>
          Returns & Refunds Policy | Celestial Shopping - Hassle-Free Returns
        </title>
        <meta
          name="description"
          content="Enjoy a simple, transparent return process at Celestial Shopping. 14-day return policy, full refunds, and excellent customer support across Ghana."
        />
        <meta
          name="keywords"
          content="returns policy Ghana, refund policy, Celestial Shopping refunds, product return Ghana, money back guarantee"
        />
        <meta
          property="og:title"
          content="Returns & Refunds | Celestial Shopping"
        />
        <meta
          property="og:description"
          content="Easy 14-day returns and full refunds with Celestial Shopping. Customer satisfaction guaranteed."
        />
        <link rel="canonical" href="https://celestialshopping.com/returns" />
      </Head>

      <Layout>
        <div className="bg-white min-h-screen py-12 text-gray-900">
          <div className="container-custom">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <RotateCcw className="text-white" size={40} />
              </div>
              <h1 className="text-5xl font-bricolage font-bold text-green-700 mb-4">
                Returns & Refunds
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                We stand behind our products with a hassle-free 14-day return
                policy and transparent refund process.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center border border-green-200 bg-white hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-green-700" size={32} />
                </div>
                <h3 className="font-bricolage text-xl font-bold mb-2 text-gray-900">
                  14-Day Returns
                </h3>
                <p className="text-gray-700">
                  Return any eligible item within 14 days of delivery.
                </p>
              </Card>

              <Card className="text-center border border-green-200 bg-white hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="text-green-700" size={32} />
                </div>
                <h3 className="font-bricolage text-xl font-bold mb-2 text-gray-900">
                  Full Refunds
                </h3>
                <p className="text-gray-700">
                  Get 100% of your money back for eligible returns.
                </p>
              </Card>

              <Card className="text-center border border-green-200 bg-white hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RotateCcw className="text-green-700" size={32} />
                </div>
                <h3 className="font-bricolage text-xl font-bold mb-2 text-gray-900">
                  Easy Process
                </h3>
                <p className="text-gray-700">
                  Simple steps to return and receive your refund.
                </p>
              </Card>
            </div>

            {/* Return Process */}
            <Card className="mb-12 border border-green-200 bg-white">
              <CardHeader>
                <CardTitle className="text-green-700 font-bold">
                  How to Return an Item
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {returnSteps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                        {index + 1}
                      </div>
                      <p className="text-gray-800 font-medium">{step}</p>
                    </div>
                  ))}
                </div>

                <Alert
                  type="info"
                  title="Return Shipping"
                  message="We provide free return shipping for defective items. For other returns, a small shipping fee may apply."
                  className="mt-6"
                />
              </CardContent>
            </Card>

            {/* Eligible / Not Eligible */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="border border-green-200 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-700 font-bold">
                    <CheckCircle className="mr-2" size={24} />
                    Eligible for Return
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {eligibleItems.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-700"
                      >
                        <CheckCircle
                          className="text-green-600 mr-3 flex-shrink-0 mt-0.5"
                          size={20}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-green-200 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-700 font-bold">
                    <XCircle className="mr-2" size={24} />
                    Not Eligible for Return
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {nonEligibleItems.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start text-gray-700"
                      >
                        <XCircle
                          className="text-red-500 mr-3 flex-shrink-0 mt-0.5"
                          size={20}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Refund Info */}
            <Card className="mb-12 border border-green-200 bg-white">
              <CardHeader>
                <CardTitle className="text-green-700 font-bold">
                  Refund Processing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                      <Clock className="text-green-700 mr-2" size={20} />
                      Processing Time
                    </h4>
                    <p className="text-gray-700 ml-7">
                      Refunds are processed within 5–7 business days after
                      receiving your returned item. You’ll receive an email
                      confirmation once completed.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                      <DollarSign className="text-green-700 mr-2" size={20} />
                      Refund Method
                    </h4>
                    <p className="text-gray-700 ml-7">
                      Refunds are issued to your original payment method. Mobile
                      money refunds are processed instantly, while card refunds
                      may take 3–5 business days to reflect.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center">
                      <AlertCircle className="text-green-700 mr-2" size={20} />
                      Partial Refunds
                    </h4>
                    <p className="text-gray-700 ml-7">
                      Items without original packaging or with signs of use may
                      receive partial refunds (up to 50% deduction) based on
                      inspection.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Exchange Policy */}
            <Card className="mb-12 border border-green-200 bg-white">
              <CardHeader>
                <CardTitle className="text-green-700 font-bold">
                  Exchange Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We currently don’t offer direct exchanges. To get a different
                  item:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                  <li>Return the original item for a full refund.</li>
                  <li>Place a new order for your preferred item.</li>
                  <li>We’ll prioritize and process your new order promptly.</li>
                </ol>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card className="border border-green-200 bg-white">
              <CardHeader>
                <CardTitle className="text-green-700 font-bold">
                  Need Help with a Return?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Our customer service team is here to help make your return as
                  smooth as possible.
                </p>
                <div className="space-y-2 text-gray-800">
                  <p>
                    <strong>Email:</strong>{' '}
                    <a
                      href="mailto:returns@celestialshopping.com"
                      className="text-green-700 hover:underline"
                    >
                      returns@celestialshopping.com
                    </a>
                  </p>
                  <p>
                    <strong>Phone:</strong>{' '}
                    <a
                      href="tel:+233245671832"
                      className="text-green-700 hover:underline"
                    >
                      +233 245 671 832
                    </a>
                  </p>
                  <p>
                    <strong>Hours:</strong> Monday – Saturday, 9AM – 6PM
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Layout>
    </>
  );
}
