import { useState } from "react";
import Cell from "./Cell.jsx";

export default function Board({ totalScoreState, bestScoreState }) {
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
  const [score, setScore] = useState({
    wigglytuff: false,
    bibarel: false,
    torterra: false,
    shinx: false,
    baltoy: false,
    electivire: false,
    stantler: false,
    reuniclus: false,
    slakoth: false,
    mightyena: false,
    machoke: false,
    "ho-oh": false,
  });
  const [cards, setCards] = useState(
    pokemon.map((poke) => {
      return <Cell name={poke} key={poke} />;
    })
  );
  return (
    <div
      className="sm:grid sm:grid-cols-2 sm:grid-rows-6  lg:grid lg:grid-rows-3 lg:grid-cols-4 gap-3 justify-items-center m-1 flex flex-col"
      onClick={(e) => {
        if (
          e.target.getAttribute("id") === "poke-img" ||
          e.target.getAttribute("id") === "poke-name"
        ) {
          let set = new Set();
          while (set.size < pokemon.length) {
            set.add(Math.floor(Math.random() * pokemon.length));
          }
          const randomInd = [...set];
          setCards(
            randomInd.map((ind) => {
              return <Cell name={pokemon[ind]} key={pokemon[ind]} />;
            })
          );
          let name = "";
          if (e.target.getAttribute("id") === "poke-img") {
            name = e.target.getAttribute("alt");
          } else {
            name = e.target.textContent;
          }
          let sum = 0;
          let obj = { ...score };
          if (!obj[name]) {
            obj[name] = true;
            setScore(obj);
            for (let [key, value] of Object.entries(obj)) {
              if (value) {
                sum += 1;
              }
            }
            totalScoreState[1](sum);
          } else {
            if (bestScoreState[0] < totalScoreState[0]) {
              bestScoreState[1](totalScoreState[0]);
            }
            totalScoreState[1](0);
            obj = {
              wigglytuff: false,
              bibarel: false,
              torterra: false,
              shinx: false,
              baltoy: false,
              electivire: false,
              stantler: false,
              reuniclus: false,
              slakoth: false,
              mightyena: false,
              machoke: false,
              "ho-oh": false,
            };
            setScore(obj);
          }
        }
      }}
    >
      {cards}
    </div>
  );
}
