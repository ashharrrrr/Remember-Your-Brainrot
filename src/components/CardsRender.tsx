import Card from "./Card";
import characters from "../characters";
import { type Character } from "../characters";

export default function CardsRender() {
  return (
    <div className="flex gap-5 flex-wrap justify-center">
      {characters.map((character: Character) => {
        return (
          <Card key={character.id} img={character.img} name={character.name} />
        );
      })}
    </div>
  );
}
