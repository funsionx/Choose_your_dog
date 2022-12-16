import Image from "next/image";
import React, { FC } from "react";
import s from "./styles.module.css";
import { IDog } from "../../interfaces";

const Card: FC<IDog> = ({imgThumb, breedName, minHeightInches, breedType}) => {
  return (
    <div className={s.card}>
      <img src={imgThumb} alt={"chel"} width={200} height={200} />
      <h3>{breedName}</h3>
      <br />
      <div className={s.footer}>
        <p>{minHeightInches}</p>
        <p>{breedType}</p>
      </div>
    </div>
  );
};

export default Card;
