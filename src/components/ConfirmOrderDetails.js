import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../Button";
import { clearCart } from "../store";
import { fallbackItemPrice, getETA } from "../utils/helper";

const ConfirmOrderDetails = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.cart.items);
  const cartTotal = items.reduce(
    (acc, curr) => (acc += curr.price / 100 || fallbackItemPrice / 100),
    0
  );
  const renderedItems = Object.values(items).map((item, index) => (
    <tr key={index}>
      <td className="border px-4 py-2">{item.name}</td>
      <td className="border px-4 py-2">
        {item.price / 100 || fallbackItemPrice / 100} /-
      </td>
    </tr>
  ));
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-[#2E4F4F]">Confirm Order</h1>
      <div className="p-5 text-center">
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="font-bold text-gray-700">Order Date:</div>
          <div>{new Date().toLocaleDateString()}</div>
          <div className="font-bold text-gray-700">Expected Delivery Time:</div>
          <div> {getETA(Math.floor(Math.random() * (50 - 30)) + 30)}</div>
          <div className="font-bold text-gray-700">Shipping Address:</div>
          <div>1234 Main St, Mg Road, Delhi, India</div>
        </div>
        <table className="min-w-[40vw]">
          <thead>
            <tr>
              <th className="w-1/2 px-4 py-2 font-bold text-gray-700">
                Product
              </th>
              <th className="w-1/4 px-4 py-2 font-bold text-gray-700">Price</th>
            </tr>
          </thead>
          <tbody>{renderedItems}</tbody>
          <tfoot>
            <tr>
              <td className="border px-4 py-2 font-bold text-gray-700">
                Total:
              </td>
              <td className="border px-4 py-2 font-bold text-gray-700">
                Rs {cartTotal} /-
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <Link className="p-2" to="/orderSuccess">
        <Button onClick={() => dispatch(clearCart())}>Confirm Order</Button>
      </Link>
    </div>
  );
};

export default ConfirmOrderDetails;
