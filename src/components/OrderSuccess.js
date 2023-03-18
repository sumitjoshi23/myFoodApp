import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getETA } from "../utils/helper";

const OrderSuccess = () => {
  var d = new Date();
  d.setMinutes(d.getMinutes() + 30);
  const profile = useSelector((store) => store.signedInUser.profile);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-[#2E4F4F]">
        Order Confirmed
      </h1>
      <div className="p-5 bg-gray-200 rounded-lg text-center">
        <p className="text-lg font-semibold text-gray-900 mb-8">
          Thank you for your order
          {profile && (
            <>
              , <span className="text-[#0E8388]">{profile.name}!</span>
            </>
          )}
        </p>
        <p className="text-gray-700 mb-4">
          Order ID: {nanoid().substring(0, 9)}
        </p>
        <p className="text-gray-700 mb-4">
          Your order has been successfully placed.
          <br />
          Order details have been mailed
          {profile && (
            <>
              to{" "}
              <span className="italic font-semibold text-[#0E8388]">
                {profile.email}
              </span>
            </>
          )}
        </p>

        <p className="text-gray-700 mb-4">ETA: {getETA(35)}</p>
        <p className="mt-8">
          <Link
            to="/"
            className="p-2 text-[#0E8388] hover:font-semibold hover:text-[#2E4F4F] hover:shadow-lg rounded hover:bg-gray-100"
          >
            Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default OrderSuccess;
