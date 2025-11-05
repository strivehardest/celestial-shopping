// pages/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Input from '@/components/Input';
import toast from 'react-hot-toast';
import { LogIn, Mail, Phone, Chrome, Lock } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loginMethod, setLoginMethod] = useState('email'); // 'email', 'phone', or 'google'
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    remember: false,
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      toast.success('Redirecting to Google...');
      // Implement Google OAuth login
      // window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google/login`;
    } catch (error) {
      toast.error('Google login failed. Please try again.');
      console.error('Google login error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const loginData = {
        username: loginMethod === 'email' ? formData.email : formData.phone,
        password: formData.password,
        login_method: loginMethod,
        remember: formData.remember,
      };

      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store auth token if provided
      if (data.token) {
        localStorage.setItem('authToken', data.token);
      }

      toast.success('Welcome back!');
      router.push('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      const errorMessage = error.message || 'Invalid credentials. Please try again.';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Sign In | Celestial Shopping - Access Your Account</title>
        <meta name="description" content="Sign in to your Celestial Shopping account. Log in with email, phone, or Google to access your orders, wishlist, and personalized shopping experience." />
        <meta name="keywords" content="sign in, login, celestial shopping, user login, account access, member login" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Sign In | Celestial Shopping" />
        <meta property="og:description" content="Access your Celestial Shopping account. Sign in with email, phone, or Google." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://celestialshopping.com/login" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sign In | Celestial Shopping" />
        <meta name="twitter:description" content="Access your Celestial Shopping account securely." />
        <link rel="canonical" href="https://celestialshopping.com/login" />
      </Head>

      <Layout>
        <div className="min-h-screen flex items-center justify-center py-12 px-4 bg-gradient-to-br from-green-50 via-white to-emerald-50">
          <div className="max-w-md w-full">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <LogIn className="text-white" size={32} />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Welcome Back
              </h1>
              <p className="text-gray-600">Sign in to your Celestial Shopping account</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              {/* Login Method Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Sign In With
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setLoginMethod('email')}
                    disabled={loading}
                    className={`flex flex-col items-center justify-center gap-2 px-4 py-4 rounded-xl border-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                      loginMethod === 'email'
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    <Mail size={24} />
                    <span className="font-medium text-sm">Email</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setLoginMethod('phone')}
                    disabled={loading}
                    className={`flex flex-col items-center justify-center gap-2 px-4 py-4 rounded-xl border-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                      loginMethod === 'phone'
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    <Phone size={24} />
                    <span className="font-medium text-sm">Phone</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleGoogleLogin}
                    disabled={loading}
                    className="flex flex-col items-center justify-center gap-2 px-4 py-4 rounded-xl border-2 border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Chrome size={24} />
                    <span className="font-medium text-sm">Google</span>
                  </button>
                </div>
              </div>

              {loginMethod !== 'google' && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {loginMethod === 'email' && (
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail size={20} className="text-gray-400" />
                        </div>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          required
                          disabled={loading}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                        />
                      </div>
                    </div>
                  )}

                  {loginMethod === 'phone' && (
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone size={20} className="text-gray-400" />
                        </div>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                          required
                          disabled={loading}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock size={20} className="text-gray-400" />
                      </div>
                      <input
                        id="password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                        disabled={loading}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="remember"
                        name="remember"
                        checked={formData.remember}
                        onChange={handleChange}
                        disabled={loading}
                        className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500 disabled:cursor-not-allowed"
                      />
                      <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                        Remember me
                      </label>
                    </div>

                    <Link
                      href="/forgot-password"
                      className="text-sm text-green-600 hover:text-green-700 font-medium"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-4 rounded-lg font-medium hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
                  >
                    {loading ? 'Signing in...' : 'Sign In'}
                  </button>
                </form>
              )}

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">New to Celestial Shopping?</span>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Link
                    href="/register"
                    className="inline-flex items-center justify-center w-full px-4 py-3 border-2 border-green-600 rounded-lg text-green-600 font-medium hover:bg-green-50 transition-all"
                  >
                    Create an account
                  </Link>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  By continuing, you agree to our{' '}
                  <Link href="/terms" className="text-green-600 hover:text-green-700">
                    Terms
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-green-600 hover:text-green-700">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}