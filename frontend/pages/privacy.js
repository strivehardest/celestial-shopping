import Head from 'next/head';
import Layout from '@/components/Layout';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/Card';
import { ShieldCheck, Lock, Eye, FileText, AlertCircle, Info } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Celestial Shopping - Your Data, Our Priority</title>
        <meta
          name="description"
          content="Learn how Celestial Shopping protects your data. We value your privacy and ensure your information is secure at all times."
        />
        <meta
          name="keywords"
          content="privacy policy, data protection, customer privacy, Celestial Shopping Ghana, secure shopping"
        />
        <meta property="og:title" content="Privacy Policy | Celestial Shopping" />
        <meta
          property="og:description"
          content="We protect your data and respect your privacy. Learn more about our privacy policy."
        />
        <link rel="canonical" href="https://celestialshopping.com/privacy" />
      </Head>

      <Layout>
        <div className="bg-white min-h-screen py-12">
          <div className="container-custom">
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="text-white" size={40} />
              </div>
              <h1 className="text-5xl font-bricolage font-bold text-gray-900 mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                At Celestial Shopping, your privacy and trust mean everything to us.
              </p>
            </div>

            {/* Information We Collect */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <FileText className="mr-2" size={24} />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-800 space-y-2 ml-4">
                  <li>Personal details like name, phone number, and email address</li>
                  <li>Shipping and billing addresses</li>
                  <li>Payment and transaction details (securely processed)</li>
                  <li>Browsing data, preferences, and shopping history</li>
                </ul>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <Lock className="mr-2" size={24} />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 mb-4">
                  We use your data responsibly to improve your shopping experience:
                </p>
                <ul className="list-disc list-inside text-gray-800 space-y-2 ml-4">
                  <li>To process and deliver your orders efficiently</li>
                  <li>To personalize your shopping experience and recommend products</li>
                  <li>To send updates, promotions, and order notifications</li>
                  <li>To enhance website security and prevent fraud</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <Eye className="mr-2" size={24} />
                  Data Protection & Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800">
                  We implement strong security measures to keep your personal data safe.
                  Our systems use encryption and secure servers to protect against unauthorized
                  access, alteration, or disclosure. Payment details are handled securely
                  through verified payment gateways.
                </p>
              </CardContent>
            </Card>

            {/* Sharing Information */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <AlertCircle className="mr-2" size={24} />
                  Sharing Your Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800">
                  Celestial Shopping does not sell or rent your personal data. We may share it only with:
                </p>
                <ul className="list-disc list-inside text-gray-800 space-y-2 ml-4 mt-3">
                  <li>Delivery and logistics partners for shipping</li>
                  <li>Payment processors for secure transactions</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <Info className="mr-2" size={24} />
                  Your Rights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 mb-3">
                  You have full control over your personal information. You may:
                </p>
                <ul className="list-disc list-inside text-gray-800 space-y-2 ml-4">
                  <li>Request a copy of your stored data</li>
                  <li>Request correction or deletion of your data</li>
                  <li>Opt out of marketing emails anytime</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 mb-4">
                  Have questions about your privacy? We’re here to help.
                </p>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Email:</strong>{' '}
                    <a
                      href="mailto:privacy@celestialshopping.com"
                      className="text-green-600 hover:text-green-700"
                    >
                      privacy@celestialshopping.com
                    </a>
                  </p>
                  <p>
                    <strong>Phone:</strong>{' '}
                    <a
                      href="tel:+233245671832"
                      className="text-green-600 hover:text-green-700"
                    >
                      +233 245 671 832
                    </a>
                  </p>
                  <p>
                    <strong>Office Hours:</strong> Monday - Saturday, 9AM - 6PM
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
