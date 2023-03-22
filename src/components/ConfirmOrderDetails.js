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
    (acc, curr) =>
      (acc += ((curr.price || fallbackItemPrice) * curr.quantity) / 100),

    0
  );
  const totalQuantity = items.reduce((acc, curr) => (acc += curr.quantity), 0);
  const renderedItems = items.map((item, index) => (
    <tr key={index}>
      <td className="border px-4 py-2">{item.name}</td>
      <td className="border px-4 py-2">{item.quantity}</td>
      <td className="border px-4 py-2">
        {item.price / 100 || fallbackItemPrice / 100} /-
      </td>
      <td className="border px-4 py-2">
        {(item.price / 100 || fallbackItemPrice / 100) * item.quantity} /-
      </td>
    </tr>
  ));
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-[#fb6c3c]">Confirm Order</h1>
      {items.length ? (
        <>
          <div className="p-5 text-center">
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="font-bold text-gray-700">Order Date:</div>
              <div>{new Date().toLocaleDateString()}</div>
              <div className="font-bold text-gray-700">
                Expected Delivery Time:
              </div>
              <div> {getETA(Math.floor(Math.random() * (50 - 30)) + 30)}</div>
              <div className="font-bold text-gray-700">Shipping Address:</div>
              <div>1234 Main St, Mg Road, Delhi, India</div>
            </div>
            <table className="min-w-[40vw]">
              <thead>
                <tr>
                  <th className="w-2/5 px-4 py-2 font-bold text-gray-700">
                    Product
                  </th>
                  <th className="w-1/5 px-4 py-2 font-bold text-gray-700">
                    Quantity
                  </th>
                  <th className="w-1/5 px-4 py-2 font-bold text-gray-700">
                    Rate(per piece)
                  </th>{" "}
                  <th className="w-1/5 px-4 py-2 font-bold text-gray-700">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>{renderedItems}</tbody>
              <tfoot>
                <tr>
                  <td className="border px-4 py-2 font-bold text-gray-700">
                    Total:
                  </td>
                  <td className="border px-4 py-2 font-bold text-gray-700">
                    {totalQuantity}
                  </td>
                  <td className="border px-4 py-2 font-bold text-gray-700"></td>
                  <td className="border px-4 py-2 font-bold text-gray-700">
                    Rs {cartTotal} /-
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <Link className="p-2" to="/orderSuccess">
            <Button
              className="hover:bg-[#f4511a] bg-[#fb6c3c] hover:scale-110 duration-300 text-white m-2 px-5"
              onClick={() => dispatch(clearCart())}
            >
              Confirm Order
            </Button>
          </Link>
        </>
      ) : (
        <div className="absolute top-72 font-bold text-2xl text-[#E97171]">
          Add items first to confirm and place an order!!
        </div>
      )}
    </div>
  );
};

export default ConfirmOrderDetails;
