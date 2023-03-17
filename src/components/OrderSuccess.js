import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="py-4 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-[#2E4F4F]">
        Order Confirmed
      </h1>
      <div className="p-5 bg-gray-200 rounded-lg text-center">
        <p className="text-lg font-semibold text-gray-900 mb-8">
          Thank you for your order!
        </p>
        <p className="text-gray-700 mb-4">
          Your order has been successfully placed.
        </p>
        <p className="text-gray-700 mb-4">Order ID: 123456789</p>
        <p className="text-gray-700 mb-4">
          Ordered On: {new Date().toDateString()}
        </p>
        <p className="mt-8">
          <Link
            to="/"
            className="p-2 text-[#0E8388] hover:font-semibold hover:text-[#2E4F4F] hover:shadow-lg  rounded hover:bg-gray-100"
          >
            Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default OrderSuccess;
