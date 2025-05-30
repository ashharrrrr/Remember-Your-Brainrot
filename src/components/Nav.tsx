import { useScoreStore } from "../store/useScoreStore";

export default function Nav() {
  const score = useScoreStore((state) => state.score);
  const bestScore = useScoreStore((state) => state.bestScore);
  return (
    <nav className="sticky top-0 z-10 bg-gray-800 w-full flex flex-wrap gap-2 justify-between items-center p-5">
      <img className="max-w-60 m-5 hover:-translate-y-2 ease-in" src="logoSVG.svg" />
      <div className="text-orange-700 text-2xl font-medium bg-amber-100 border-6 rounded-2xl border-amber-400 p-2">
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
    </nav>
  );
}
