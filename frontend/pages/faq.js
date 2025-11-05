// pages/faq.js
import Head from 'next/head';
import Layout from '@/components/Layout';
import {
  HelpCircle,
  ChevronDown,
  Info,
  RefreshCcw,
  Truck,
  CreditCard,
  ShieldCheck,
  ShoppingBag,
  MessageCircle,
} from 'lucide-react';
import { useState } from 'react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeTopic, setActiveTopic] = useState('All');

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const helpTopics = [
    { icon: Info, title: 'All' },
    { icon: ShoppingBag, title: 'Ordering' },
    { icon: Truck, title: 'Shipping & Delivery' },
    { icon: RefreshCcw, title: 'Returns & Refunds' },
    { icon: CreditCard, title: 'Payments' },
    { icon: ShieldCheck, title: 'Privacy & Security' },
    { icon: MessageCircle, title: 'Customer Support' },
  ];

  const faqs = [
    {
      question: 'How do I place an order?',
      answer:
        'Simply browse our products, add items to your cart, and click "Checkout". You can pay by MTN MoMo, Fidelity Bank, or cash on delivery.',
      category: 'Ordering',
      icon: ShoppingBag,
    },
    {
      question: 'What are your delivery timelines?',
      answer:
        'Orders within Accra and Kumasi are delivered within 1–3 working days. For other regions, delivery may take 5–7 working days depending on location.',
      category: 'Shipping & Delivery',
      icon: Truck,
    },
    {
      question: 'Can I return or exchange an item?',
      answer:
        'Yes! You can return any unused item in its original packaging within 7 days of delivery for a full refund or replacement.',
      category: 'Returns & Refunds',
      icon: RefreshCcw,
    },
    {
      question: 'Which payment methods do you accept?',
      answer:
        'We currently accept MTN Mobile Money, Fidelity Bank Transfer, and cash on delivery (in select areas).',
      category: 'Payments',
      icon: CreditCard,
    },
    {
      question: 'How secure is my personal information?',
      answer:
        'Your information is encrypted and securely stored. Celestial Shopping never shares your personal or payment details with any third party.',
      category: 'Privacy & Security',
      icon: ShieldCheck,
    },
    {
      question: 'How can I contact customer support?',
      answer:
        'You can reach our support team via WhatsApp, phone, or email — Monday to Saturday, 9AM–6PM. Phone: +233 245 671 832, Email: support@celestialshopping.com.',
      category: 'Customer Support',
      icon: MessageCircle,
    },
  ];

  const filteredFaqs =
    activeTopic === 'All'
      ? faqs
      : faqs.filter((faq) => faq.category === activeTopic);

  return (
    <>
      <Head>
        <title>FAQs | Celestial Shopping - Help & Support</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about orders, shipping, payments, and returns at Celestial Shopping."
        />
        <meta
          name="keywords"
          content="Celestial Shopping FAQ, orders, delivery, payments, returns, Ghana online store"
        />
        <meta property="og:title" content="FAQs | Celestial Shopping" />
        <meta
          property="og:description"
          content="Your questions answered — everything you need to know about Celestial Shopping."
        />
        <link rel="canonical" href="https://celestialshopping.com/faq" />
      </Head>

      <Layout>
        <div className="bg-white min-h-screen py-12">
          <div className="container mx-auto px-4">
            {/* Hero */}
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="text-white" size={40} />
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
                Help Center
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find answers to your questions about orders, delivery, and more.
              </p>
            </div>

            {/* FAQ Layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Sticky Sidebar */}
              <aside className="md:col-span-1 md:sticky md:top-28 space-y-3 h-fit">
                {helpTopics.map((topic, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setActiveTopic(topic.title);
                      setOpenIndex(null);
                    }}
                    className={`flex items-center space-x-3 p-4 border rounded-xl cursor-pointer transition duration-200 ${
                      activeTopic === topic.title
                        ? 'bg-green-100 border-green-600 text-green-700 shadow-sm'
                        : 'bg-white border-gray-200 hover:bg-green-50'
                    }`}
                  >
                    <topic.icon
                      className={`${
                        activeTopic === topic.title
                          ? 'text-green-700'
                          : 'text-green-600'
                      }`}
                      size={20}
                    />
                    <p className="font-semibold">{topic.title}</p>
                  </div>
                ))}
              </aside>

              {/* FAQ Section */}
              <section className="md:col-span-3 space-y-6">
                {filteredFaqs.map((faq, index) => (
                  <div key={index}>
                    <div
                      onClick={() => toggleFAQ(index)}
                      className="flex justify-between items-center bg-white border border-gray-200 rounded-xl p-5 cursor-pointer hover:shadow-md transition"
                    >
                      <div className="flex items-center space-x-3">
                        <faq.icon className="text-green-600" size={22} />
                        <h3 className="text-gray-900 font-semibold">
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`text-gray-500 transition-transform duration-300 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                        size={20}
                      />
                    </div>

                    {openIndex === index && (
                      <div className="bg-gray-50 border border-t-0 border-gray-200 rounded-b-xl p-5 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}

                {/* Contact Support */}
                <div className="border border-green-200 bg-green-50 rounded-xl p-6 mt-10">
                  <h3 className="text-2xl font-bold text-green-700 mb-2">
                    Still Need Help?
                  </h3>
                  <p className="text-gray-700 mb-2">
                    If your question isn’t listed here, our support team is ready
                    to assist you.
                  </p>
                  <p>
                    Email:{' '}
                    <a
                      href="mailto:support@celestialshopping.com"
                      className="text-green-700 font-semibold hover:underline"
                    >
                      support@celestialshopping.com
                    </a>{' '}
                    | Call:{' '}
                    <a
                      href="tel:+233245671832"
                      className="text-green-700 font-semibold hover:underline"
                    >
                      +233 245 671 832
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
