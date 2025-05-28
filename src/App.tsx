import { useState, useEffect } from "react";
import CardsRender from "./components/CardsRender";
import Nav from "./components/Nav";
import { type Character } from "./characters";
import { useCharactersStore } from "./store/useCharactersStore";
import { useScoreStore } from "./store/useScoreStore";
import GameOver from "./components/GameOver";

function App() {
  const characters = useCharactersStore((state) => state.characters);
  const updateCharacters = useCharactersStore(
    (state) => state.updateCharacters
  );
  const updateIsClicked = useCharactersStore((state) => state.updateIsClicked);
  const [endGame, setEndGame] = useState(false);

  const { score, bestScore, updateScore, updateBestScore } = useScoreStore();

  
  useEffect(() => {
    updateCharacters(shuffleCards([...characters]))
  }, [])

  function shuffleCards(array: Character[]) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  function handleCardClick(character: Character) {
    if (character.isClicked) {
      setEndGame(true);
    } else {
      if (score + 1 < 12) {
        updateScore(score);
      } else {
        setEndGame(true);
      }

      updateIsClicked(character.id, true);
      const updatedCharacters = characters.map((char) =>
        char.id === character.id ? { ...char, isClicked: true } : char
      );
      updateCharacters(shuffleCards([...updatedCharacters]));

      if (score + 1 > bestScore) {
        updateBestScore(score + 1);
      }
    }
  }

  return (
    <div className="flex flex-col items-center min-h-[100vh] bg-gray-900">
      {!endGame ? (
        <>
          <Nav />
          <div className="flex-grow flex items-center justify-center w-full p-5 pt-8">
            <CardsRender handleCardClick={handleCardClick} />
          </div>
        </>
      ) : (
        <GameOver setEndGame={setEndGame} />
      )}
    </div>
  );
}

export default App;
