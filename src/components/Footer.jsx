import React from 'react';
import { Link } from 'react-router-dom';
import { Store, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Store className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">ShopyKart</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Your ultimate shopping destination for electronics, fashion, jewelry, and more. 
              Discover amazing products at unbeatable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-300 hover:text-white transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/products?category=electronics" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link 
                  to="/products?category=jewelery" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Jewelry
                </Link>
              </li>
              <li>
                <Link 
                  to="/products?category=men's clothing" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Men's Clothing
                </Link>
              </li>
              <li>
                <Link 
                  to="/products?category=women's clothing" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Women's Clothing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for shopping enthusiasts
          </p>
          <p className="text-gray-400 text-sm mt-2">
            © 2024 ShopyKart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;