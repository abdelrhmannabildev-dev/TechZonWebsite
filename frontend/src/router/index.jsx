import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import Products from "../pages/Products/Products.jsx";
import Admin from "../pages/admin/AdminPage.jsx";
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
      },
      {
        path: "/admin",
        element: <Admin />,
      }
    ],
  }
]);

export default router;