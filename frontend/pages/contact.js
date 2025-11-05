import Head from 'next/head';
import { useState } from 'react';
import Layout from '@/components/Layout';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Alert from '@/components/Alert';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    toast.success("Message sent successfully! We'll get back to you soon.");
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'support@celestialshopping.com',
      link: 'mailto:support@celestialshopping.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+233 530 505 031',
      link: 'tel:+233530505031'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '123 Shopping Street, Accra, Ghana',
      link: null
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon - Sat: 9AM - 6PM',
      link: null
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Contact Us | Celestial Shopping Ghana</title>
        <meta
          name="description"
          content="Get in touch with Celestial Shopping for inquiries, support, or partnership opportunities. We're here to help you 24/7."
        />
        <meta
          name="keywords"
          content="Contact Celestial Shopping, customer support Ghana, online shop help, Celestial Shopping contact info, Ghana e-commerce"
        />
      </Head>

      <div className="bg-gray-50 min-h-screen py-12 text-gray-800">
        <div className="container-custom">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bricolage font-bold text-green-700 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-700">
              Have a question? We'd love to hear from you.
            </p>
          </div>

          {/* Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white shadow-md">
                <h2 className="text-2xl font-bricolage font-bold text-green-700 mb-6">
                  Send us a Message
                </h2>

                {submitted && (
                  <Alert
                    type="success"
                    title="Success!"
                    message="Your message has been sent. We'll respond within 24 hours."
                    onClose={() => setSubmitted(false)}
                  />
                )}

                <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Waliu Aforlabi"
                      required
                      className="border-gray-300 focus:border-green-600 text-gray-800 placeholder-gray-500"
                    />

                    <Input
                      label="Email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="waliu@example.com"
                      required
                      className="border-gray-300 focus:border-green-600 text-gray-800 placeholder-gray-500"
                    />
                  </div>

                  <Input
                    label="Subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                    className="border-gray-300 focus:border-green-600 text-gray-800 placeholder-gray-500"
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full border border-gray-300 focus:border-green-600 rounded-lg px-3 py-2 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-white shadow-sm hover:shadow-md transition duration-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bricolage font-bold text-lg text-green-700 mb-1">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-700 hover:text-green-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-700">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}

              {/* FAQ Link */}
              <Card className="bg-green-50 border border-green-200">
                <h3 className="font-bricolage font-bold text-lg text-green-700 mb-2">
                  Need Quick Answers?
                </h3>
                <p className="text-gray-700 mb-4">
                  Check out our FAQ section for instant answers to common questions.
                </p>
                <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-100">
                  Visit FAQ
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <section className="w-full h-[400px] mt-16 border-t border-green-100">
        <iframe
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.961248671007!2d-0.18696432530448147!3d5.603716833872333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10208b0123abcd01%3A0xa6b84d92e962dd2c!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1697323838827!5m2!1sen!2sgh"
        ></iframe>
      </section>
    </Layout>
  );
}
