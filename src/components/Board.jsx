import { useState } from "react";
import Cell from "./Cell.jsx";

export default function Board() {
  const pokemon = [
    "wigglytuff",
    "bibarel",
    "torterra",
    "shinx",
    "baltoy",
    "electivire",
    "stantler",
    "reuniclus",
    "slakoth",
    "mightyena",
    "machoke",
    "ho-oh",
  ];
  const [cards, setCards] = useState(
    pokemon.map((poke) => {
      return <Cell name={poke} />;
    })
  );
  return (
    <div
      className="grid grid-rows-3 grid-cols-4 gap-3  justify-items-center m-1"
      onClick={(e) => {
        if (e.target.getAttribute("id") === "poke") {
          let set = new Set();
          while (set.size < pokemon.length) {
            set.add(Math.floor(Math.random() * pokemon.length));
          }
          const randomInd = [...set];
          setCards(
            randomInd.map((ind) => {
              return <Cell name={pokemon[ind]} />;
            })
          );
        }
      }}
    >
      {cards}
    </div>
  );
}
