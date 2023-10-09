/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CreateProduct from "../pages/CreateProduct";
import LandingPage from "../pages/LandingPage";
import DetailData from "../pages/detail";

function Router() {
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
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
