import { useState, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

import { SearchBox } from "../SearchBox";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import styles from "./Header.module.scss";

export const Header = () => {
  const [active, setActive] = useState({
    home: "",
    rated: "inactiveLink",
  });

  const [displayItems, setDisplayItems] = useState(true)

  const [menu, setMenu] = useState(true);

  const toggleMenu = () => {
    setMenu(!menu);
    setDisplayItems(!displayItems)
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
      <div className={styles.wrapperMenu} onClick={toggleMenu}>
        {menu ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
      </div>
      <div className={styles.wrapperLinks} style={{ display: displayItems ? "" : "none" }}>
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
      <SearchBox display={displayItems}/>
      
    </div>
  );
};
