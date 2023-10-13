import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useManageModal } from "../../hooks/useManageModal/useManageModal";

import { Modal } from "../Modal";

type SeachBoxType = {
  showNavbar: () => void;
};

import styles from "./SearchBox.module.scss";

export const SearchBox = ({ showNavbar }: SeachBoxType) => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const { isModal, manageModal } = useManageModal();

  const handleNavigate = () => {
    if (search) {
      scrollTo({ top: 0, behavior: "instant" });
      navigate(`searched-movies/${search}`);
      setSearch("");
      showNavbar();
    } else {
      manageModal();
    }
  };

  return (
    <section className={styles.wrapper}>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Digite o nome do filme..."
        onChange={(ev) => setSearch(ev.target.value)}
        value={search}
        className={styles.wrapperSearch}
        onKeyDown={(ev) => ev.key === "Enter" && handleNavigate()}
      />
      <button onClick={handleNavigate} className={styles.wrapperBtn}>
        Buscar
      </button>
      <Modal
        isModal={isModal}
        modalText="Preencha o nome de algum filme!"
        modalTitle="Campo vazio!"
        modalAction={manageModal}
      />
    </section>
  );
};
