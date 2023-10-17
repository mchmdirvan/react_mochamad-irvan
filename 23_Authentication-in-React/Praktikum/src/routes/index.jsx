/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";

import { setAxiosConfig } from "../utils/API/axiosWithConfig";
import CreateProduct from "../pages/CreateProduct";
import LandingPage from "../pages/LandingPage";
import DetailData from "../pages/detail";
import Login from "../pages/Login";

function Router() {
  useEffect(() => {
    setAxiosConfig("", "https://651a7c44340309952f0d5ec8.mockapi.io/api/v1/");
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/create-product",
      element: <CreateProduct />,
    },
    {
      path: "/create-product/:id",
      element: <DetailData />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
