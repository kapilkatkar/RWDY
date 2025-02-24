import { createRoot } from "react-dom/client";
import "./index.css";
import { StrictMode } from "react";
import Home from "./components/Home.jsx";
import ProductList from "./components/product/Product.Layot.jsx";
import MyCart from "./components/cart/Cart.Layout.jsx";
import store from "./components/redux/Store.jsx";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetail from "./components/product/productDetails.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Error</div>,
  },
  {
    path: "/winter-essential",
    element: <ProductList />,
    errorElement: <div>Error</div>,
  },
  {
    path: "/RWDY-X-sunburn",
    element: <ProductList />,
  },
  {
    path: "/topwear",
    element: <ProductList />,
  },
  {
    path: "/bottomwear",
    element: <ProductList />,
  },
  {
    path: "/accessories",
    element: <ProductList />,
  },
  {
    path: "/cart",
    element: <MyCart></MyCart>,
    errorElement: <div>Error</div>,
  },
  {
    path: "/contacts",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Home />,
    errorElement: <div>Error</div>,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} store={store} />
    </StrictMode>
  </Provider>
);
