/* eslint-disable no-unused-vars */
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { useEffect } from "react";

import { useToken } from "../utils/states/contexts/token-context";
import { setAxiosConfig } from "../utils/API/axiosWithConfig";
import CreateProduct from "../pages/CreateProduct";
import LandingPage from "../pages/LandingPage";
import DetailData from "../pages/detail";
import Login from "../pages/Login";

function Router() {
  const { token } = useToken();

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
      element: token === "" ? <Login /> : <Navigate to="/"/> 
    },
    {
      path: "/create-product",
      element: token === "" ? <Navigate to="/login"/> : <CreateProduct /> 
    },
    {
      path: "/create-product/:id",
      element: token === "" ? <Navigate to="/login"/>: <DetailData /> 
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
