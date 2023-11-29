/* eslint-disable no-unused-vars */
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";

import { useToken } from "../utils/states/contexts/token-context";
import { setAxiosConfig } from "../utils/API/axiosWithConfig";
import CreateProduct from "../pages/CreateProduct";
import LandingPage from "../pages/LandingPage";
import DetailData from "../pages/Detail";
import OpenAI from "../pages/OpenAI";
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
      element: token === "" ? <Login /> : <Navigate to="/" />,
    },
    {
      path: "/create-product",
      element: token === "" ? <Navigate to="/login" /> : <CreateProduct />,
    },
    {
      path: "/create-product/:id",
      element: token === "" ? <Navigate to="/login" /> : <DetailData />,
    },
    {
      path: "/openai",
      element: token === "" ? <Navigate to="/login" /> : <OpenAI />,
    },
    {
      path: "*",
      element: <div>404 page Not Found</div>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
