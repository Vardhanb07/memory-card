import { useState } from "react";
import Nav from "./components/Nav.jsx";
import Board from "./components/Board.jsx";

export default function App() {
  const [totalScore, setTotalScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  return (
    <div className="p-2">
      <Nav totalScoreState={[totalScore, setTotalScore]} bestScoreState={[bestScore, setBestScore]} />
      <Board totalScoreState={[totalScore, setTotalScore]} bestScoreState={[bestScore, setBestScore]} />
    </div>
  );
}
