import Link from "next/link";
import React, { useState, ChangeEvent, useEffect } from "react";
import { useDebounce } from "../../hooks/debounce";
import { IDog } from "../../interfaces";
import { useGetDogByNameQuery } from "../../store/dog.api";
import s from "./styles.module.css";

//const onSearch = (searchTerm: any) => {setSearchDog(searchTerm);};
//const filteredDogs = data.filter((data: any) => {return data.breed.toLowerCase().includes(searchDog.toLowerCase());
//<button onClick={() => onSearch(searchDog)}>dsf</button>
// const [dog, setDog] = useState(data);
const DogSearch = () => {
  const [searchDog, setSearchDog] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(searchDog);
  const {
    isLoading,
    error,
    data: dogs,
  } = useGetDogByNameQuery(debounced, {
    skip: debounced.length < 3,
  });

  useEffect(() => {
    setDropdown(debounced.length > 2 && dogs?.length! > 0);
  }, [debounced, dogs]);

  const clickHandler = (username: string) => {
    setDropdown(false);
  };
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchDog(event.target.value);
  };
  if (error) return <>something goes wrong</>;

  console.log(dogs);
  return (
    <div className={s.wrapper}>
      <input
        placeholder="Название породы"
        type="text"
        onChange={onChange}
        value={searchDog}
        className={s.inputArea}
      />
      {dropdown && (
        <ul className={s.dropdown}>
          {isLoading && <p className="text-center">Loading...</p>}
          {dogs?.map((dog: IDog) => (
            <li
              key={dog.id}
              onClick={() => clickHandler(dog.breedName)}
              className={s.row}
            >
              <Link href={`/${dog.breedName}`}>{dog.breedName}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DogSearch;
