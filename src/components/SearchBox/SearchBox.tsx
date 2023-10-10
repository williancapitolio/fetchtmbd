import { useState } from "react";

import { useNavigate } from "react-router-dom";

import styles from "./SearchBox.module.scss";

export const SearchBox = () => {
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
    </section>
  );
};