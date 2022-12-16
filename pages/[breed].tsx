//import { getDenormalizedPosts } from "../../utils";
import { IDog } from "../app/interfaces";
import { useGetAllDogsQuery } from "../app/store/dog.api";

export default function breed() {
  const { data: dogs } = useGetAllDogsQuery(null);
  console.log(dogs);
  return (
    <>
      <main>
        <article>
          <h1>{dogs.dogBreed}</h1>
          <p>{dogs.breedDescription}</p>
        </article>
      </main>
    </>
  );
}

export async function getStaticPaths(dogs: IDog[]) {
  const paths = dogs.map((dog: IDog) => ({
    params: { breed: dog.breedName },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any, dogs: IDog[]) {
  const { breed } = params;

  const dog = dogs.find((dog: IDog) => dog.breedName === breed);

  return {
    props: { dog },
  };
}
