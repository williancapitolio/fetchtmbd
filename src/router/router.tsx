import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../pages/Layout";
import { ErrorBoundary } from "../pages/ErrorBoundary";
import { Home } from "../pages/Home";
import { MovieDetails } from "../pages/MovieDetails";
import { RatedMovies } from "../pages/RatedMovies";
import { SearchedMovies } from "../pages/SearchedMovies";

import { guestSessionLoader } from "../loaders/guestSessionLoader";
/* import { movieLoader } from "../loaders/movieLoader"; */
import { movieDetailsLoader } from "../loaders/movieDetailsLoader";
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
        path: "movie/:movie_id",
        element: <MovieDetails />,
        loader: movieDetailsLoader,
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
