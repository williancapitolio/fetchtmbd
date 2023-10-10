import { useState } from "react";

import { useNavigate } from "react-router-dom";

type SearchBoxType = {
  display: boolean;
};

import styles from "./SearchBox.module.scss";

export const SearchBox = ({ display }: SearchBoxType) => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleNavigate = () => {
    if (search) {
      navigate(`searched-movies/${search}`);
      setSearch("");
    } else {
      alert("vazio");
    }
  };

  return (
    <section className={styles.wrapper} style={{ display: display ? "" : "none" }}>
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
    </section>
  );
};
