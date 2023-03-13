import "./index.css";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RestaurantMenu from "./components/RestarauntMenu";
import App from "./App";
import Error from "./components/Error";
import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Shimmer from "./components/Shimmer";
const Cart = lazy(() => import("./components/Cart"));

let el = document.querySelector("#root");
let root = ReactDOM.createRoot(el);
let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
