import { useState, useEffect, useRef } from "react";

import { Link, useLocation } from "react-router-dom";

import { SearchBox } from "../SearchBox";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import styles from "./Header.module.scss";

export const Header = () => {
  const [active, setActive] = useState({
    home: "",
    rated: "inactiveLink",
  });

  const navRef = useRef<HTMLDivElement>();

  const showNavbar = () => {
    navRef.current?.classList.toggle("responsiveNav");
  };

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
    } else if (location.pathname.includes("/searched-movies")) {
      setActive({
        home: "inactiveLink",
        rated: "inactiveLink",
      });
    }
  }, [location]);

  return (
    <div className={styles.wrapper}>
      <Link to={"/"} className={styles.wrapperLogo}>
        FetchTMDB
      </Link>

      <div
        className={styles.wrapperLinks}
        ref={navRef as React.RefObject<HTMLDivElement>}
      >
        <Link
          to={"/"}
          className={`${styles.wrapperLinksLink} ${active.home}`}
          onClick={showNavbar}
        >
          Início
        </Link>
        <Link
          to={"rated-movies"}
          className={`${styles.wrapperLinksLink} ${active.rated}`}
          onClick={showNavbar}
        >
          Avaliações
        </Link>
        <div className={styles.wrapperLinksSearch}>
          <SearchBox showNavbar={showNavbar} />
        </div>

        <AiOutlineClose
          size={25}
          className={`${styles.wrapperLinksClose} ${styles.CloseBtn}`}
          onClick={showNavbar}
        />
      </div>

      <AiOutlineMenu
        size={25}
        className={styles.wrapperMenuBtn}
        onClick={showNavbar}
      />
    </div>
  );
};
