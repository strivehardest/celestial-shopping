// pages/terms.js
import Head from "next/head";
import Layout from "@/components/Layout";
import Card, { CardHeader, CardTitle, CardContent } from "@/components/Card";
import { ShieldCheck, FileText, Clock, AlertCircle,RotateCcw, Info } from "lucide-react";

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | Celestial Shopping</title>
        <meta
          name="description"
          content="Read Celestial Shopping’s Terms & Conditions outlining user rights, store policies, payments, deliveries, returns, and dispute resolutions."
        />
        <meta
          name="keywords"
          content="terms and conditions, Celestial Shopping policies, user agreement, return policy, payment terms, Ghana eCommerce"
        />
        <meta property="og:title" content="Terms & Conditions | Celestial Shopping" />
        <meta
          property="og:description"
          content="Understand our Terms & Conditions for shopping, payments, deliveries, and returns at Celestial Shopping."
        />
        <link rel="canonical" href="https://celestialshopping.com/terms" />
      </Head>

      <Layout>
        <div className="bg-white min-h-screen py-12">
          <div className="container-custom">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="text-white" size={40} />
              </div>
              <h1 className="text-5xl font-bricolage font-bold text-gray-900 mb-4">
                Terms & Conditions
              </h1>
              <p className="text-lg text-gray-800 max-w-2xl mx-auto">
                Please read these terms carefully before using our website or making a purchase.
              </p>
            </div>

            {/* General Terms */}
            <Card className="mb-10">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <FileText className="mr-2" size={24} />
                  1. Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-800 leading-relaxed">
                <p>
                  These Terms and Conditions govern your use of{" "}
                  <strong>Celestial Shopping</strong> and all related services.
                  By accessing or purchasing from our site, you agree to these terms.
                  If you do not agree, please discontinue using the site immediately.
                </p>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="mb-10">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <Info className="mr-2" size={24} />
                  2. User Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-800 leading-relaxed space-y-3">
                <ul className="list-disc list-inside space-y-2">
                  <li>Provide accurate, current, and complete information during checkout.</li>
                  <li>Maintain the confidentiality of your account credentials.</li>
                  <li>Use our platform only for lawful shopping and personal use.</li>
                  <li>Not engage in fraudulent or harmful activity against the site or other users.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Orders and Payments */}
            <Card className="mb-10">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <Clock className="mr-2" size={24} />
                  3. Orders and Payments
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-800 leading-relaxed space-y-3">
                <p>
                  All prices listed on <strong>Celestial Shopping</strong> are in Ghanaian Cedis (₵).
                  We accept payments via Mobile Money, Debit/Credit Card, and Bank Transfer.
                </p>
                <p>
                  Once your order is confirmed, you’ll receive an email or SMS notification.
                  Orders are processed after payment confirmation.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Incorrect payment details may delay order processing.</li>
                  <li>We reserve the right to cancel any fraudulent or invalid order.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Shipping and Delivery */}
            <Card className="mb-10">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <FileText className="mr-2" size={24} />
                  4. Shipping and Delivery
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-800 leading-relaxed">
                <p>
                  We provide delivery services across Ghana through trusted courier partners.
                  Delivery timelines and costs vary depending on the region and selected shipping method.
                </p>
                <p className="mt-2">
                  Refer to our{" "}
                  <a
                    href="/shipping"
                    className="text-green-600 hover:text-green-700 underline"
                  >
                    Shipping Policy
                  </a>{" "}
                  for detailed information.
                </p>
              </CardContent>
            </Card>

            {/* Returns and Refunds */}
            <Card className="mb-10">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <RotateCcw className="mr-2" size={24} />
                  5. Returns & Refunds
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-800 leading-relaxed">
                <p>
                  Our return policy allows customers to return eligible items within
                  14 days of delivery. Refunds are processed via the same payment
                  method used during purchase.
                </p>
                <p className="mt-2">
                  For more information, see our{" "}
                  <a
                    href="/returns"
                    className="text-green-600 hover:text-green-700 underline"
                  >
                    Returns Policy
                  </a>
                  .
                </p>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="mb-10">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <AlertCircle className="mr-2" size={24} />
                  6. Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-800 leading-relaxed">
                <p>
                  Celestial Shopping shall not be held liable for indirect, incidental, or consequential
                  damages arising from your use of our platform or services. We do not guarantee that
                  our website will always be available or error-free.
                </p>
              </CardContent>
            </Card>

            {/* Privacy and Data */}
            <Card className="mb-10">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <ShieldCheck className="mr-2" size={24} />
                  7. Privacy and Data Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-800 leading-relaxed">
                <p>
                  We value your privacy and protect your data in compliance with applicable
                  data protection laws in Ghana. Your information is used only for
                  order processing and improving user experience.
                </p>
                <p className="mt-2">
                  See our{" "}
                  <a
                    href="/privacy"
                    className="text-green-600 hover:text-green-700 underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  for details.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card className="mb-10">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <FileText className="mr-2" size={24} />
                  8. Changes to Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-800 leading-relaxed">
                <p>
                  We may update these Terms & Conditions from time to time. Changes
                  take effect immediately upon posting. Please review this page regularly.
                </p>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <Info className="mr-2" size={24} />
                  9. Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-800 leading-relaxed">
                <p>
                  If you have any questions about our Terms & Conditions, please reach out:
                </p>
                <div className="mt-4 space-y-1">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:support@celestialshopping.com"
                      className="text-green-600 hover:text-green-700"
                    >
                      support@celestialshopping.com
                    </a>
                  </p>
                  <p>
                    <strong>Phone:</strong>{" "}
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
