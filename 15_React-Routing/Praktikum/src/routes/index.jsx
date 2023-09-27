/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import CreateProduct from "../pages/CreateProduct"

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
        path:"/create-product",
        element: <CreateProduct/>
    }
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
