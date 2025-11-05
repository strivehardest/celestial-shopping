// pages/about.js
import Head from 'next/head';
import Layout from '@/components/Layout';
import Card from '@/components/Card';
import { Target, Users, Award, Heart } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To provide premium quality products that enhance your lifestyle while ensuring exceptional customer service.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description:
        'We prioritize our customers needs and strive to exceed expectations with every purchase.',
    },
    {
      icon: Award,
      title: 'Quality Products',
      description:
        'We carefully curate our product selection to ensure only the best items reach our customers.',
    },
    {
      icon: Heart,
      title: 'Community',
      description:
        'Building lasting relationships with our customers and supporting local communities.',
    },
  ];

  return (
    <Layout>
      <Head>
        <title>About Celestial Shopping | Premium Online Store</title>
        <meta
          name="description"
          content="Learn about Celestial Shopping — your trusted partner for premium quality products, outstanding service, and customer satisfaction since 2025."
        />
        <meta
          name="keywords"
          content="Celestial Shopping, About Celestial Shopping, online store Ghana, premium products, best shopping experience, Celestial Web Solutions, Celestial e-commerce"
        />
      </Head>

      <div className="bg-gray-50 text-gray-800 font-sans">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-20 text-center">
          <div className="container-custom">
            <h1 className="text-5xl font-bricolage font-bold text-green-700 mb-6">
              About <span className="text-primary-600">Celestial Shopping</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Your trusted partner in online shopping, delivering quality products
              and exceptional service since 2025.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bricolage font-bold text-green-700 text-center mb-8">
                Our Story
              </h2>
              <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
                <p>
                  Celestial Shopping was founded with a simple vision: to make premium
                  quality products accessible to everyone. We believe that shopping should
                  be an enjoyable experience, not a chore.
                </p>
                <p className="mt-4">
                  From our humble beginnings, we've grown into a trusted online destination
                  for thousands of customers. Our commitment to quality, customer service,
                  and innovation remains unwavering.
                </p>
                <p className="mt-4">
                  Every product we offer is carefully selected and tested to ensure it meets
                  our high standards. We're not just selling products – we're building
                  relationships and creating memorable shopping experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bricolage font-bold text-green-700 text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="text-center bg-white shadow-md hover:shadow-lg transition duration-200"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-green-600" size={32} />
                  </div>
                  <h3 className="font-bricolage text-xl font-semibold text-green-700 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-700">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-green-700 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-5xl font-bricolage font-bold mb-2">10K+</p>
                <p className="text-green-100">Happy Customers</p>
              </div>
              <div>
                <p className="text-5xl font-bricolage font-bold mb-2">5K+</p>
                <p className="text-green-100">Products Sold</p>
              </div>
              <div>
                <p className="text-5xl font-bricolage font-bold mb-2">50+</p>
                <p className="text-green-100">Categories</p>
              </div>
              <div>
                <p className="text-5xl font-bricolage font-bold mb-2">24/7</p>
                <p className="text-green-100">Customer Support</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
