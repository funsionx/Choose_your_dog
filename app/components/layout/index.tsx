import React, { ReactNode } from "react";
import s from "./styles.module.css";

interface ILayout {
  children: ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <header className={s.layout}>
        <div className={s.left}></div>
        <section className={s.right}>
          <nav>Здесь</nav>
          <nav>Будет</nav>
          <nav>Инфа</nav>
        </section>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
