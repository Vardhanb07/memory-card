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
    () => {
      setSrc(brokenImg);
    };
  }, [name]);
  return (
    <>
      <img src={src} alt={name} />
    </>
  );
}
