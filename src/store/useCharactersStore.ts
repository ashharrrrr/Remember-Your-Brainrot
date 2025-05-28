import { create } from "zustand";
import characters from "../characters";
import { type Character } from "../characters";

type CharactersStoreType = {
  characters: Character[];
  updateCharacters: (newCharacters: Character[]) => void;
  updateIsClicked: (id: number, isClicked: boolean) => void;
  resetIsClicked: () => void;
};

export const useCharactersStore = create<CharactersStoreType>((set) => ({
  characters: characters,
  updateCharacters: (newCharacters) =>
    set(() => ({ characters: newCharacters })),
  updateIsClicked: (id, isClicked) =>
    set((state) => ({
      characters: state.characters.map((character) =>
        character.id === id ? { ...character, isClicked: isClicked } : character
      ),
    })),
  resetIsClicked: () =>
    set((state) => ({
      characters: state.characters.map((character) => ({
        ...character,
        isClicked: false,
      })),
    })),
}));
