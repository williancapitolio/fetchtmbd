import { Header } from "../../components/Header";
import { Error } from "../../components/Error";
import { Footer } from "../../components/Footer";

import styles from "./ErrorBoundary.module.scss";

export const ErrorBoundary = () => {
  return (
    <>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <Error />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  );
};
