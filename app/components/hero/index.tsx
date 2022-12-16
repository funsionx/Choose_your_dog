import Link from "next/link";
import React, { ReactNode } from "react";
import s from "./styles.module.css";
import { IHero } from "../../interfaces";
import DogSearch from "../dog_search";



const HeroSection: React.FC<IHero> = ({children}) => {
  return (
    <main className={s.heroSection}>
      <h1>Найдём пёселя за тебя!</h1>
      {children}
      <h2>или выбери сам</h2>
      <Link href={"/dogs"}>мням</Link>
    </main>
  );
};

export default HeroSection;
