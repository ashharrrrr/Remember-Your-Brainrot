import Card from "./Card";
import { type Character } from "../characters";
import { useCharactersStore } from "../store/useCharactersStore";

type CardsRenderProps = {
  handleCardClick: (character: Character) => void;
};

export default function CardsRender({ handleCardClick }: CardsRenderProps) {
  const characters = useCharactersStore((state) => state.characters);
  return (
    <div className="flex gap-5 flex-wrap justify-center">
      {characters.map((character: Character) => {
        return (
          <Card
            handleCardClick={() => handleCardClick(character)}
            key={character.id}
            img={character.img}
            name={character.name}
            character={character}
          />
        );
      })}
    </div>
  );
}
