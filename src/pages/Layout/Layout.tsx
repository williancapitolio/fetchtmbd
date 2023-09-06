import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>HEADER</header>
      <main>
        <Outlet />
      </main>
      <footer>FOOTER</footer>
    </>
  );
};
