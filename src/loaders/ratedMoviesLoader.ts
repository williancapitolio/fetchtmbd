import { MoviesType } from "../types/MoviesType";

export const ratedMoviesLoader = async (): Promise<MoviesType> => {
  const storedGuestSession = localStorage.getItem("guest_session_id");
  if (!storedGuestSession) throw new Error("Something went wrong...");

  const url = `${
    import.meta.env.VITE_URL_RATED_MOVIES
  }${storedGuestSession}/rated/movies?language=pt-BR&api_key=${import.meta.env.VITE_API_KEY}`;
  /* const token: string = import.meta.env.VITE_TOKEN; */

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      /* Authorization: token, */
    },
  };

  const results = await fetch(url, options);

  if (!results.ok) throw new Error("Something went wrong...");

  const movies = await results.json();

  return { movies };
};
