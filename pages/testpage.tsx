import React from "react";
import Card from "../app/components/card/Card";
import dogPic from "../public/dogExample.jpg";
import { useGetAllDogsQuery } from "../app/store/dog.api";
import { IDog } from "../app/interfaces";

const testpage = () => {
  const { data: dogs } = useGetAllDogsQuery("");
  return (
    <>
      <ul>
        {dogs?.map((dog: IDog) => (
          <li key={dog.id}>
            <Card
              imgThumb={dogs.imgThumb}
              breedName={dogs.breedName}
              breedType={dogs.breedType}
              minHeightInches={dogs.minHeightInches}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default testpage;
