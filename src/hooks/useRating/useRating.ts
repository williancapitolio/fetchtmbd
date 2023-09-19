import { useLoaderData } from "react-router-dom";

import { useState } from "react";

import { useGuestSession } from "../useGuestSession";

import { MoviesType, IMovie } from "../../types/MoviesType";

export const useRating = () => {
  const { storedGuestSession } = useGuestSession();

  const { movies } = useLoaderData() as MoviesType;

  const [data, setData] = useState<[] | IMovie[]>([]);

  const addRating = async (movie_id: number, value: number) => {
    const url = `${
      import.meta.env.VITE_URL_RATING
    }${movie_id}/rating?guest_session_id=${storedGuestSession}&api_key=${
      import.meta.env.VITE_API_KEY
    }`;
    /* const token: string = import.meta.env.VITE_TOKEN; */
    const rating = `{"value":${value}}`;

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
        /* Authorization: token, */
      },
      body: rating,
    };

    await fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json, rating))
      .catch((err) => console.error("error:" + err));
  };

  const deleteRating = async (movie_id: number) => {
    const url = `${
      import.meta.env.VITE_URL_RATING
    }${movie_id}/rating?guest_session_id=${storedGuestSession}&api_key=${
      import.meta.env.VITE_API_KEY
    }`;

    const options = {
      method: "DELETE",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
      },
    };

    await fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error("error:" + err));
  };

  const getDataRated = () => {
    const items: IMovie[] = [];

    /* if (movies.results.length < 0) return; */

    movies.results.map((movie) => {
      items.push(movie);
    });
    return setData(items);
  };

  return { addRating, deleteRating, data, getDataRated };
};
