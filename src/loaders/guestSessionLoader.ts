import { GuestSessionType } from "../types/GuestSessionType";

export const guestSessionLoader = async (): Promise<GuestSessionType> => {
  const url: string = import.meta.env.VITE_URL_NEW_GUEST_SESSION;
  /* const token: string = import.meta.env.VITE_TOKEN; */

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      /* Authorization: token, */
    },
  };

  const results = await fetch(url, options);

  if (!results) throw new Error("Something went wrong...");

  const guestSession = await results.json();

  if (!localStorage.getItem("guest_session_id")) {
    localStorage.setItem(
      "guest_session_id",
      guestSession.guest_session_id
    );
  }

  return { guestSession };
};
