/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  getPokemonList,
  getPokemonDescription,
  getPokemonSpriteUrl,
} from "./api/utils";
import Select from "./components/select";

const PokemonCard = function ({ pokemonInfo }) {
  return (
    <>
      <img src={pokemonInfo.img} alt={pokemonInfo.name} />
      <h2>{pokemonInfo.name}</h2>
      <p>{pokemonInfo.description}</p>
    </>
  );
};

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currPokemonIdx, setCurrentPokemonIdx] = useState(0);
  const [pokemonInfo, setPokemonInfo] = useState({});

  useEffect(() => {
    async function getList() {
      const pokeList = await getPokemonList();
      setPokemonList(pokeList);
    }
    getList();
  }, []);

  useEffect(() => {
    async function getDescription() {
      const description = await getPokemonDescription(currPokemonIdx + 1);

      setPokemonInfo({
        name: pokemonList.length > 0 ? pokemonList[currPokemonIdx].name : "",
        img: getPokemonSpriteUrl(currPokemonIdx + 1),
        description: description,
      });
    }

    getDescription();
  }, [currPokemonIdx, pokemonList]);

  return (
    <>
      <Select
        value={currPokemonIdx}
        onChange={(e) => setCurrentPokemonIdx(+e.target.value)}
      >
        {pokemonList.map((pokemon, index) => (
          <option key={index} value={index}>
            {pokemon.name}
          </option>
        ))}
      </Select>

      <PokemonCard pokemonInfo={pokemonInfo}></PokemonCard>

      <div>
        <button
          onClick={() =>
            setCurrentPokemonIdx((index) =>
              index <= 0 ? pokemonList.length - 1 : index - 1
            )
          }
        >
          Previous
        </button>
        <button
          onClick={() =>
            setCurrentPokemonIdx((index) =>
              index >= pokemonList.length - 1 ? 0 : index + 1
            )
          }
        >
          Next
        </button>
      </div>
    </>
  );
}
