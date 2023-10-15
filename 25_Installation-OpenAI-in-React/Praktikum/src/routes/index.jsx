/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";

import { setAxiosConfig } from "../utils/API/axiosWithConfig";
import CreateProduct from "../pages/CreateProduct";
import LandingPage from "../pages/LandingPage";
import DetailData from "../pages/detail";
import  OpenAI  from "../pages/OpenAI";

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
      path: "/create-product",
      element: <CreateProduct />,
    },
    {
      path: "/create-product/:id",
      element: <DetailData />,
    },
    {
      path: "/openai",
      element: <OpenAI/>,
    },
    {
      path: "*",
      element: <div>404 page Not Found</div>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
