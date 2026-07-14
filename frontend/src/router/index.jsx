import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import Products from "../pages/Products/Products.jsx";


import AdminLayout from "../layouts/AdminLayout.jsx";
import Admin from "../pages/admin/AdminPage.jsx";
import AdminLogin from "../pages/admin/AdminLogin.jsx";
import AdminProducts from "../components/admin/product/AdminProducts.jsx"
import AdminOrders from "../components/admin/orders/AdminOrders.jsx"



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
        path: "/products",
        element: <Products />,
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
      {
        path: "login",
        element: <AdminLogin />,
      }
    ],
    
  }
]);

export default router;