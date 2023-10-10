import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../pages/Layout";
import { ErrorBoundary } from "../pages/ErrorBoundary";
import { Home } from "../pages/Home";
import { RatedMovies } from "../pages/RatedMovies";
import { SearchedMovies } from "../pages/SearchedMovies";

import { guestSessionLoader } from "../loaders/guestSessionLoader";
/* import { movieLoader } from "../loaders/movieLoader"; */
import { ratedMoviesLoader } from "../loaders/ratedMoviesLoader";
import { searchedMoviesLoader } from "../loaders/searchedMoviesLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: guestSessionLoader,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
        /* loader: movieLoader, */
      },
      {
        path: "rated-movies",
        element: <RatedMovies />,
        loader: ratedMoviesLoader,
      },
      {
        path: "searched-movies/:query",
        element: <SearchedMovies />,
        loader: searchedMoviesLoader,
      },
    ],
  },
]);
