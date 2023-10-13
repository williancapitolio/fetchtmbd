import { useState } from "react";

export const useManageModal = () => {
  const [isModal, setIsModal] = useState(false);

  const manageModal = () => {
    setIsModal(!isModal);
  };

  return { isModal, manageModal };
};
