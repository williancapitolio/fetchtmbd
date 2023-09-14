export const useGuestSession = () => {
  const storedGuestSession = localStorage.getItem("guest_session_id");

  return { storedGuestSession };
};
