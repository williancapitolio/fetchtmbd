import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "./Header.module.scss";

export const Header = () => {
  const [active, setActive] = useState({
    home: "",
    rated: "inactiveLink",
  });

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActive({
        home: "",
        rated: "inactiveLink",
      });
    } else if (location.pathname === "/rated-movies") {
      setActive({
        home: "inactiveLink",
        rated: "",
      });
    }
  }, [location]);

  return (
    <div className={styles.wrapper}>
      <Link to={"/"} className={styles.wrapperLogo}>
        FetchTMDB
      </Link>
      <div className={styles.wrapperLinks}>
        <Link to={"/"} className={`${styles.wrapperLinksLink} ${active.home}`}>
          Início
        </Link>
        <Link
          to={"rated-movies"}
          className={`${styles.wrapperLinksLink} ${active.rated}`}
        >
          Avaliações
        </Link>
      </div>
      <span className={styles.wrapperUser}>Olá Visitante!</span>
    </div>
  );
};
