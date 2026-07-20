import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/users/Home.jsx";
import Products from "../pages/users/Products/Products.jsx";


import AdminLayout from "../layouts/AdminLayout.jsx";
import Admin from "../pages/admin/AdminPage.jsx";
import AdminLogin from "../pages/admin/AdminLogin.jsx";
import AdminProducts from "../pages/admin/AdminProducts.jsx"
import AdminOrders from "../components/admin/orders/AdminOrders.jsx"
import About from "../pages/users/about/About.jsx";
import Contact from "../pages/users/contact/Contact.jsx";
import ProductPage from "../components/users/ProductDetails/ProductPage.jsx";
import Cart from "../pages/users/Cart/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductPage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "cart",
        element: <Cart />
      }
    ],

  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Admin />,
      },
      {
        path:"products",
        element: <AdminProducts />

      },
      {
        path:"orders",
        element: <AdminOrders />
      },
    ],
    
  },
  {
    path: "admin/login",
    element: <AdminLogin />,
  }
]);

export default router;