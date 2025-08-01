import Nav from "./components/Nav.jsx";
import Cell from "./components/Cell.jsx";

export default function App() {
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
  let set = new Set();
  while (set.size < pokemon.length) {
    set.add(Math.floor(Math.random() * pokemon.length));
  }
  const randomInd = [...set];
  return (
    <div className="p-2">
      <Nav />
      {randomInd.map((ind) => {
        return <Cell name={pokemon[ind]} />;
      })}
    </div>
  );
}
