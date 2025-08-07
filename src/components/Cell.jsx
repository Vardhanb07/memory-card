import { useEffect } from "react";
import { useState } from "react";
import brokenImg from "../assets/broken-img.svg";

export default function Cell({ name }) {
  const [src, setSrc] = useState(brokenImg);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, { mode: "cors" })
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        return res["sprites"]["other"]["dream_world"]["front_default"];
      })
      .then((img) => {
        setSrc(img);
      })
      .catch(() => {
        setSrc(brokenImg);
      });
    return () => {
      setSrc(brokenImg);
    };
  }, [name]);
  return (
    <div
      className="flex flex-col gap-2 font-roboto bg-amber-400 rounded-2xl p-2 hover:shadow-2xl cursor-pointer justify-center items-center w-full "
      id="poke-card"
    >
      <img src={src} alt={name} className="h-65 w-65" id="poke-img" />
      <p className="text-center text-lg" id="poke-name">
        {name}
      </p>
    </div>
  );
}
