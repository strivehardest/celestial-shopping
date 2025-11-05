import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '@/components/Layout';
import useCartStore from '@/store/cartStore';
import toast from 'react-hot-toast';
import Card from '@/components/Card';
import Button from '@/components/Button';
import EmptyState from '@/components/EmptyState';
import { ShoppingBag } from 'lucide-react';

export default function CheckoutPage() {
  const router = useRouter();
  const items = useCartStore((state) => state.items);
  const getTotal = useCartStore((state) => state.getTotal);
  const clearCart = useCartStore((state) => state.clearCart);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    address: '',
    region: '',
    city: '',
    payment_method: 'fidelity',
  });

  // Region → City mapping
  const regions = {
    'Greater Accra': ['Accra', 'Tema', 'Madina', 'Achimota', 'Kasoa'],
    'Ashanti': ['Kumasi', 'Obuasi', 'Ejisu'],
    'Western': ['Takoradi', 'Sekondi', 'Tarkwa'],
    'Volta': ['Ho', 'Keta', 'Hohoe', 'Aflao'],
    'Oti': ['Dambai', 'Nkwanta'],
    'Western North': ['Sefwi Wiawso', 'Bibiani'],
    'Bono East': ['Techiman', 'Nkoranza'],
    'Ahafo': ['Goaso', 'Bechem'],
    'Bono': ['Sunyani', 'Dormaa Ahenkro'],
    'Central': ['Cape Coast', 'Winneba', 'Swedru'],
    'Eastern': ['Koforidua', 'Nkawkaw', 'Akim Oda'],
    'Upper West': ['Wa', 'Lambussie'],
    'North East': ['Nalerigu', 'Gushegu'],
    'Savannah': ['Damongo', 'Salaga'],
    'Northern': ['Tamale', 'Yendi'],
    'Upper East': ['Bolgatanga', 'Navrongo'],
  };

  const shippingFees = {
    'Greater Accra': 20,
    'Ashanti': 50,
    'Western': 50,
    'Volta': 50,
    'Central': 70,
    'Western North': 100,
    'Oti': 100,
    'Eastern': 100,
    'Bono East': 100,
    'Ahafo': 100,
    'Bono': 100,
    'Savannah': 100,
    'Upper West': 100,
    'North East': 100,
    'Northern': 100,
    'Upper East': 100,
    Default: 15,
  };

  const total = getTotal();
  const shippingFee = shippingFees[formData.region] || shippingFees.Default;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      ...(name === 'region' ? { city: '' } : {}), // Reset city when region changes
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      toast.success('Order placed successfully!');
      clearCart();
      router.push('/orders/success');
    } catch {
      toast.error('Failed to place order');
    } finally {
      setLoading(false);
    }
  };

  const paymentDetails = {
    fidelity: {
      title: 'Fidelity Bank Transfer',
      name: 'Celestial Web Ventures',
      account: '0060102304598',
      branch: 'Keta Branch',
      note: 'Use your full name as reference.',
    },
    momo: {
      title: 'MTN Mobile Money',
      name: 'Celestial Web Ventures',
      number: '0551234567',
      note: 'Send via MoMo Pay, include your order ID.',
    },
    cash: {
      title: 'Cash on Delivery',
      note: 'Prepare exact amount to be collected on delivery.',
    },
  };

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container-custom py-20">
          <EmptyState
            icon={ShoppingBag}
            title="Your Cart is Empty"
            message="Add products to checkout"
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
        <title>Checkout | Celestial Shopping</title>
        <meta
          name="description"
          content="Secure checkout on Celestial Shopping. Pay via Fidelity Bank, MTN MoMo, or Cash on Delivery. Fast delivery across Ghana."
        />
        <meta name="keywords" content="checkout, pay, mtn momo, fidelity, celestial shopping, Ghana e-commerce" />
      </Head>

      <div className="bg-white min-h-screen py-10 text-gray-900">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-green-700 mb-8 font-bricolage">
            Checkout
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <Card>
                <h2 className="text-2xl font-semibold text-green-700 mb-6 font-bricolage">
                  Shipping Information
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-gray-800 mb-1 font-medium">Full Name</label>
                    <input
                      type="text"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      className="w-full border border-gray-400 rounded-lg p-3 focus:ring-2 focus:ring-green-600 focus:outline-none"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-800 mb-1 font-medium">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-400 rounded-lg p-3 focus:ring-2 focus:ring-green-600 focus:outline-none"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-800 mb-1 font-medium">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-400 rounded-lg p-3 focus:ring-2 focus:ring-green-600 focus:outline-none"
                        placeholder="+233 501 234 567"
                        required
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-gray-800 mb-1 font-medium">Address</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows="3"
                      className="w-full border border-gray-400 rounded-lg p-3 focus:ring-2 focus:ring-green-600 focus:outline-none"
                      placeholder="House No. 12, Palm Street, Adjiringanor"
                      required
                    />
                  </div>

                  {/* Region & City */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-800 mb-1 font-medium">Region</label>
                      <select
                        name="region"
                        value={formData.region}
                        onChange={handleChange}
                        className="w-full border border-gray-400 rounded-lg p-3 focus:ring-2 focus:ring-green-600 focus:outline-none"
                        required
                      >
                        <option value="">Select Region</option>
                        {Object.keys(regions).map((region) => (
                          <option key={region} value={region}>
                            {region}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-800 mb-1 font-medium">City</label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full border border-gray-400 rounded-lg p-3 focus:ring-2 focus:ring-green-600 focus:outline-none"
                        required
                        disabled={!formData.region}
                      >
                        <option value="">Select City</option>
                        {formData.region &&
                          regions[formData.region].map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <h3 className="text-xl font-semibold text-green-700 mb-3 font-bricolage">
                      Payment Method
                    </h3>
                    <div className="space-y-3">
                      {[
                        { id: 'fidelity', label: 'Fidelity Bank Transfer' },
                        { id: 'momo', label: 'MTN Mobile Money' },
                        { id: 'cash', label: 'Cash on Delivery' },
                      ].map((method) => (
                        <label
                          key={method.id}
                          className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition GH₵{
                            formData.payment_method === method.id
                              ? 'border-green-600 bg-green-50'
                              : 'border-gray-300 hover:border-green-400'
                          }`}
                        >
                          <input
                            type="radio"
                            name="payment_method"
                            value={method.id}
                            checked={formData.payment_method === method.id}
                            onChange={handleChange}
                            className="text-green-600 focus:ring-green-600"
                          />
                          <span className="font-medium text-gray-900">{method.label}</span>
                        </label>
                      ))}
                    </div>

                    {/* Payment Info Display */}
                    <div className="mt-4 p-4 border border-green-300 rounded-lg bg-green-50 text-sm text-gray-800">
                      <h4 className="font-semibold text-green-700">
                        {paymentDetails[formData.payment_method].title}
                      </h4>
                      {paymentDetails[formData.payment_method].account && (
                        <p>Account: {paymentDetails[formData.payment_method].account}</p>
                      )}
                      {paymentDetails[formData.payment_method].name && (
                        <p>Name: {paymentDetails[formData.payment_method].name}</p>
                      )}
                      {paymentDetails[formData.payment_method].branch && (
                        <p>Branch: {paymentDetails[formData.payment_method].branch}</p>
                      )}
                      {paymentDetails[formData.payment_method].number && (
                        <p>MoMo Number: {paymentDetails[formData.payment_method].number}</p>
                      )}
                      <p className="mt-2 text-gray-700">
                        Note: {paymentDetails[formData.payment_method].note}
                      </p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    disabled={loading}
                    className="bg-green-600 hover:bg-green-700 text-white text-lg py-4"
                  >
                    {loading ? 'Processing...' : 'Place Order'}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <h2 className="text-2xl font-semibold text-green-700 mb-6 font-bricolage">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm text-gray-800">
                      <span>
                        {item.name} × {item.quantity}
                      </span>
                      <span className="font-medium">
                        GH₵{(parseFloat(item.price) * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 border-t pt-4 text-gray-800">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>GH₵{total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600">₵{shippingFee}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span className="text-green-700">
                        GH₵{(total + shippingFee).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
