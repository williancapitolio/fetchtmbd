import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../pages/Layout";
import { Home } from "../pages/Home";
import { RatedMovies } from "../pages/RatedMovies";

import { guestSessionLoader } from "../loaders/guestSessionLoader";
import { movieLoader } from "../loaders/movieLoader";
import { ratedMoviesLoader } from "../loaders/ratedMoviesLoader";

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
      {
        path: "rated-movies",
        element: <RatedMovies />,
        loader: ratedMoviesLoader,
      },
    ],
  },
]);
