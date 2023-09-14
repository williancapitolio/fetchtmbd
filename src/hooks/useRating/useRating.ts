import { useGuestSession } from "../useGuestSession";

export const useRating = () => {
  const { storedGuestSession } = useGuestSession();
  
  const addRating = async (movie_id: number, value: number) => {
    const url: string = `${
      import.meta.env.VITE_ADD_RATING
    }${movie_id}/rating?guest_session_id=${storedGuestSession}`;
    const token: string = import.meta.env.VITE_TOKEN;
    const rating = `{"value":${value}}`;

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
        Authorization: token,
      },
      body: rating,
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error("error:" + err));
  };

  const deleteRating = () => {};

  return { addRating, deleteRating };
};
