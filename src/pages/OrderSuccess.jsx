import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Home, ShoppingBag } from 'lucide-react';

const OrderSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mb-6">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Order Placed Successfully!</h1>
            <p className="text-gray-600">
              Thank you for your purchase. Your order has been received and is being processed.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center mb-3">
              <Package className="h-6 w-6 text-blue-600 mr-2" />
              <span className="font-semibold">Order #SK{Math.floor(Math.random() * 10000)}</span>
            </div>
            <p className="text-sm text-gray-600">
              You will receive an email confirmation shortly with tracking details.
            </p>
          </div>

          <div className="space-y-3">
            <Link
              to="/"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg inline-flex items-center justify-center transition-colors"
            >
              <Home className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            
            <Link
              to="/products"
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-4 rounded-lg inline-flex items-center justify-center transition-colors"
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Questions about your order? Contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;