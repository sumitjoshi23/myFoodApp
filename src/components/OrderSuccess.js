import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useShowLoader from "../hooks/useShowLoader";
import { getETA } from "../utils/helper";
import Checkmark from "./Checkmark";

const OrderSuccess = () => {
  const showLoader = useShowLoader(5000);

  var d = new Date();
  d.setMinutes(d.getMinutes() + 30);
  const profile = useSelector((store) => store.signedInUser.profile);
  const content = showLoader ? (
    <Checkmark />
  ) : (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-[#a81010]">
        Order Confirmed
      </h1>
      <div className="p-5 bg-gray-200 rounded-lg text-center">
        <p className="text-lg font-semibold text-gray-900 mb-8">
          Thank you for your order
          {profile && (
            <>
              , <span className="text-[#E97171]">{profile.name}!</span>
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
              {" "}
              to{" "}
              <span className="italic font-semibold text-[#E97171]">
                {profile.email}
              </span>
            </>
          )}
        </p>

        <p className="text-gray-700 mb-4">
          ETA: {getETA(Math.floor(Math.random() * (50 - 30)) + 30)}
        </p>
        <p className="mt-8">
          <Link
            to="/"
            className="p-2 text-[#E97171] font-semibold hover:font-bold hover:text-[#a81010] hover:shadow-lg rounded-lg hover:bg-gray-100"
          >
            Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
  return content;
};

export default OrderSuccess;
