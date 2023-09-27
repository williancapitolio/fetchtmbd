import { useGuestSession } from "../useGuestSession";

export const useRating = () => {
  const { storedGuestSession } = useGuestSession();

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

    const res = await fetch(url, options);

    if (!res.ok) throw new Error("Something went wrong while adding...");

    const addMovie = await res.json();

    return { addMovie };

    /* await fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error("error:" + err)); */
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

    const res = await fetch(url, options);

    if (!res.ok) throw new Error("Something went wrong when deleting...");

    const deletedMovie = await res.json();

    return { deletedMovie };

    /* await fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error("error:" + err)); */
  };

  return { addRating, deleteRating };
};
