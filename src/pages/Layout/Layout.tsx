import { Outlet } from "react-router-dom";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import styles from "./Layout.module.scss";

export const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  );
};
