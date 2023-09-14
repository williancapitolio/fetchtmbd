import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../pages/Layout";
import { Home } from "../pages/Home";

import { guestSessionLoader } from "../loaders/guestSessionLoader";
import { movieLoader } from "../loaders/movieLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: guestSessionLoader,
    children: [
      {
        index: true,
        element: <Home />,
        loader: movieLoader,
      },
    ],
  },
]);
