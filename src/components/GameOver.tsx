import { useCharactersStore } from "../store/useCharactersStore";
import { useScoreStore } from "../store/useScoreStore";

type TypeSetEndGame = {
  setEndGame: (endGame: boolean) => void;
};

export default function GameOver({ setEndGame }: TypeSetEndGame) {
  const resetIsClicked = useCharactersStore((state) => state.resetIsClicked);
  const resetScore = useScoreStore((state) => state.resetScore);
  const score = useScoreStore((state) => state.score);
  function restartGame() {
    setEndGame(false);
    resetScore();
    resetIsClicked();
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-center p-8">
      <h1 className="text-6xl font-bold text-white mb-4">Game Over</h1>
      {score + 1 < 12 ? (
        <p className="text-4xl text-orange-700 font-medium mb-8">You Lost!</p>
      ) : (
        <p className="text-4xl text-green-700 font-medium mb-8">You Won!</p>
      )}
      <button
        onClick={restartGame}
        className="text-2xl font-medium bg-amber-100 text-orange-700 border-4 rounded-2xl border-amber-400 px-8 py-4 hover:bg-amber-200 hover:border-amber-500 transition-colors duration-200">
        Restart
      </button>
    </div>
  );
}
