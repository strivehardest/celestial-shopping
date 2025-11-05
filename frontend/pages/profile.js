// pages/profile.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/Card';
import Tabs from '@/components/Tabs';
import Loading from '@/components/Loading';
import { User, Package, LogOut } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ProfilePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    address: '',
    city: '',
  });

  useEffect(() => {
    checkAuth();
  }, []);

  async function checkAuth() {
    const token = localStorage.getItem('access_token');
    if (!token) {
      toast.error('Please login to view your profile');
      router.push('/login');
      return;
    }

    try {
      const [userRes, ordersRes] = await Promise.all([
        authAPI.getProfile(),
        ordersAPI.getMyOrders()
      ]);
      
      setUser(userRes.data);
      setFormData({
        first_name: userRes.data.first_name || '',
        last_name: userRes.data.last_name || '',
        phone: userRes.data.phone || '',
        address: userRes.data.address || '',
        city: userRes.data.city || '',
      });
      setOrders(ordersRes.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      if (error.response?.status === 401) {
        toast.error('Please login again');
        router.push('/login');
      } else {
        toast.error('Failed to load profile');
        setLoading(false);
      }
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);

    try {
      await authAPI.updateProfile(formData);
      toast.success('Profile updated successfully');
      checkAuth();
    } catch (error) {
      console.error(error);
      toast.error('Failed to update profile');
    } finally {
      setUpdating(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    toast.success('Logged out successfully');
    router.push('/');
  };

  if (loading) {
    return (
      <Layout>
        <div className="container-custom py-20">
          <Loading message="Loading profile..." />
        </div>
      </Layout>
    );
  }

  const tabs = [
    {
      label: 'Profile',
      content: (
        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="First Name"
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="John"
              />

              <Input
                label="Last Name"
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Doe"
              />
            </div>

            <Input
              label="Email"
              type="email"
              value={user?.email}
              disabled
              className="opacity-75"
            />

            <Input
              label="Phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+233 123 456 789"
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                className="input"
                placeholder="123 Main Street"
              />
            </div>

            <Input
              label="City"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Accra"
            />

            <Button
              type="submit"
              variant="primary"
              disabled={updating}
              fullWidth
            >
              {updating ? 'Updating...' : 'Update Profile'}
            </Button>
          </form>
        </Card>
      ),
    },
    {
      label: 'Orders',
      content: (
        <div className="space-y-4">
          {orders.length === 0 ? (
            <Card>
              <p className="text-center text-gray-600 py-8">No orders yet</p>
            </Card>
          ) : (
            orders.map((order) => (
              <Card key={order.id} hover>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bricolage font-bold text-lg">
                      Order #{order.order_number}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {new Date(order.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary-600">
                      ${parseFloat(order.total_amount).toFixed(2)}
                    </p>
                    <span className={`badge ${
                      order.status === 'delivered' ? 'badge-success' :
                      order.status === 'cancelled' ? 'badge-danger' :
                      'badge-warning'
                    } mt-2`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen py-8">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bricolage font-bold text-gray-900">
                My Account
              </h1>
              <p className="text-gray-600 mt-2">
                Welcome back, {user?.first_name || user?.username}!
              </p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="flex items-center gap-2"
            >
              <LogOut size={18} />
              Logout
            </Button>
          </div>

          <Tabs tabs={tabs} />
        </div>
      </div>
    </Layout>
  );
}