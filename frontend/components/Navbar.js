'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import useCartStore from '@/store/cartStore';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Cart item count
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((c, i) => c + (i.quantity || 0), 0);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <img 
            src="/logo.png" 
            alt="Celestial Shopping Logo" 
            className="h-10 w-auto object-contain"
            onError={(e) => {
              // Fallback if image doesn't exist
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
          <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center hidden">
            <span className="text-white font-bricolage font-bold text-xl">C</span>
          </div>
          <span className="font-bricolage text-2xl font-bold text-gray-900">
            Celestial
          </span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
            Home
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
            Products
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
            Contact
          </Link>
          <Link href="/track-order" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
            Track Order
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-3">
          {/* Login / Signup */}
          <div className="hidden md:flex items-center space-x-3">
            <Link 
              href="/login" 
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all shadow-sm hover:shadow-md font-medium"
            >
              Sign up
            </Link>
          </div>

          {/* Cart */}
          <Link 
            href="/cart" 
            className="relative p-2 rounded-lg bg-green-100 hover:bg-green-200 transition-colors"
            aria-label="Shopping cart"
          >
            <ShoppingCart size={20} className="text-green-700" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md">
                {itemCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={22} className="text-gray-800" />
            ) : (
              <Menu size={22} className="text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-3">
          <Link 
            href="/" 
            onClick={() => setMenuOpen(false)} 
            className="block text-gray-700 hover:text-green-600 font-medium py-2"
          >
            Home
          </Link>
          <Link 
            href="/products" 
            onClick={() => setMenuOpen(false)} 
            className="block text-gray-700 hover:text-green-600 font-medium py-2"
          >
            Products
          </Link>
          <Link 
            href="/about" 
            onClick={() => setMenuOpen(false)} 
            className="block text-gray-700 hover:text-green-600 font-medium py-2"
          >
            About
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setMenuOpen(false)} 
            className="block text-gray-700 hover:text-green-600 font-medium py-2"
          >
            Contact
          </Link>
          <Link 
            href="/track-order" 
            onClick={() => setMenuOpen(false)} 
            className="block text-gray-700 hover:text-green-600 font-medium py-2"
          >
            Track Order
          </Link>

          <div className="border-t border-gray-200 pt-3 mt-3">
            <Link 
              href="/login" 
              onClick={() => setMenuOpen(false)} 
              className="block text-gray-700 hover:text-green-600 font-medium py-2"
            >
              Login
            </Link>
            <Link 
              href="/register" 
              onClick={() => setMenuOpen(false)} 
              className="mt-2 inline-block px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all shadow-sm font-medium"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}