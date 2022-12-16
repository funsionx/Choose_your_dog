import { NextPage } from "next";
import Image from "next/image";
import DogSearch from "../app/components/dog_search";
import HeroSection from "../app/components/hero";
import dogPic from "../public/dogExample.jpg";

const Home: NextPage = () => {
  return (
    <>
      <Image
        src={dogPic}
        alt={""}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -9999,
        }}
      />
      <HeroSection>
        <DogSearch />
      </HeroSection>
    </>
  );
};

export default Home;
