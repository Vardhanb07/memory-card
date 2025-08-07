export default function Nav({ totalScoreState, bestScoreState }) {
  return (
    <div className="flex flex-row flex-wrap m-10">
      <h1 className="flex-3 text-2xl font-roboto">Memory Card</h1>
      <div className="flex-1 font-roboto">
        <p className="text-lg">Score: {totalScoreState[0]}</p>
        <p className="text-lg">Best Score: {bestScoreState[0]}</p>
      </div>
    </div>
  );
}
