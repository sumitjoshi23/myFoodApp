import "./index.css";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./App";
import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Shimmer from "./components/shimmer/RestaurantsListingShimmer.js.js";
import ConfirmOrderDetails from "./components/ConfirmOrderDetails";
import RestaurantDetails from "./components/RestarauntDetails";
import OrderSuccess from "./components/OrderSuccess";
import Offers from "./components/Offers";
import NestedAbout from "./components/NestedAbout";
import ErrorPage from "./components/ErrorPage";
const Cart = lazy(() => import("./components/Cart"));

const el = document.querySelector("#root");
const root = ReactDOM.createRoot(el);
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "nestedAbout",
            element: <NestedAbout />,
          },
        ],
      },
      {
        path: "offers",
        element: <Offers />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "restaurant/:id",
        element: <RestaurantDetails />,
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "orderDetails",
        element: <ConfirmOrderDetails />,
      },
      {
        path: "orderSuccess",
        element: <OrderSuccess />,
      },
    ],
  },
]);

root.render(
  <GoogleOAuthProvider clientId="765542815213-ojvan3ttmq3vq3vorjg3erg2jrrgq46j.apps.googleusercontent.com">
    <RouterProvider router={appRouter} />
  </GoogleOAuthProvider>
);
