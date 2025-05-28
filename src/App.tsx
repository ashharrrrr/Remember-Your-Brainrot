import CardsRender from "./components/CardsRender";
import Nav from "./components/Nav";
import { type Character } from "./characters";
import { useCharactersStore } from "./store/useCharactersStore";

function App() {
  const characters = useCharactersStore((state) => state.characters);
  const updateCharacters = useCharactersStore(
    (state) => state.updateCharacters
  );

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

  function handleCardClick() {
    
    updateCharacters(shuffleCards([...characters]));
  }

  return (
    <div className="flex flex-col items-center min-h-[100vh] bg-gray-900">
      <Nav />
      <div className="flex-grow flex items-center justify-center w-full p-5 pt-8">
        <CardsRender handleCardClick={handleCardClick} />
      </div>
    </div>
  );
}

export default App;
