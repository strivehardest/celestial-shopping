// components/Footer.js
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      <div className="container-custom py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
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
              <span className="font-bricolage text-2xl font-bold text-gray-800">Celestial</span>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Your premium online shopping destination for quality products in Ghana.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/celestialshopping" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com/celestialshopping" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com/celestialshopping" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bricolage text-lg font-bold mb-4 text-green-700">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-green-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-green-600 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-green-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-green-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-gray-600 hover:text-green-600 transition-colors">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bricolage text-lg font-bold mb-4 text-green-700">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping" className="text-gray-600 hover:text-green-600 transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-600 hover:text-green-600 transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-green-600 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-green-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-green-600 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bricolage text-lg font-bold mb-4 text-green-700">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-600">123 Shopping Street, Accra, Ghana</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-green-600 flex-shrink-0" />
                <a 
                  href="tel:+233245671832" 
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  +233 245 671 832
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-green-600 flex-shrink-0" />
                <a 
                  href="mailto:info@celestialshopping.com" 
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  info@celestialshopping.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 flex flex-col items-center space-y-4">
          <h3 className="font-bricolage text-lg font-semibold text-green-700">We Accept</h3>
          <Image
            src="/images/payments/paystack-gh.png"
            alt="Payment Methods"
            width={400}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center space-y-2">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Celestial Shopping. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Developed and Designed by{' '}
            <a
              href="https://celestialwebsolutions.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-700 font-semibold transition-colors"
            >
              Celestial Web Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}