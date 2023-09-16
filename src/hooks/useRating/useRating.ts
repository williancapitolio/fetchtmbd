import { useGuestSession } from "../useGuestSession";

export const useRating = () => {
  const { storedGuestSession } = useGuestSession();

  const addRating = async (movie_id: number, value: number) => {
    const url: string = `${
      import.meta.env.VITE_URL_ADD_RATING
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

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json, rating))
      .catch((err) => console.error("error:" + err));
  };

  const deleteRating = (movie_id: number) => {
    console.log(movie_id);
  };

  return { addRating, deleteRating };
};
