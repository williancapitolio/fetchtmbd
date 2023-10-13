import { AiOutlineClose } from "react-icons/ai";

type ModalType = {
  isModal: boolean;
  modalTitle: string;
  modalText: string;
  modalAction: () => void;
};

import styles from "./Modal.module.scss";

export const Modal = ({
  isModal,
  modalTitle,
  modalText,
  modalAction,
}: ModalType) => {
  if (isModal) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.wrapperModal}>
          <div className={styles.wrapperModalHead}>
            <h3>{modalTitle}</h3>
            <span onClick={modalAction}>
              <AiOutlineClose />
            </span>
          </div>

          <div className={styles.wrapperModalBody}>
            <p>{modalText}</p>
          </div>

          <div className={styles.wrapperModalFooter}>
            <button onClick={modalAction}>Fechar</button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
