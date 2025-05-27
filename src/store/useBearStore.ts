import { create } from 'zustand';

type BearStoreType = {bears: number, increasePopulation: () => void}

export const useBearStore = create<BearStoreType>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 }))
}))
