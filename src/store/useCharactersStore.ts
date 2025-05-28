import { create } from 'zustand';
import characters from '../characters';
import { type Character } from '../characters';

type CharactersStoreType = {
  characters: Character[],
  updateCharacters: (newCharacters: Character[]) => void
};

export const useCharactersStore = create<CharactersStoreType>((set) => ({
  characters: characters,
  updateCharacters: (newCharacters) => set(() => ({characters: newCharacters}))
}));