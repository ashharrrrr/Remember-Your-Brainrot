import { create } from "zustand";

type ScoreStoreType = {
    score: number,
    bestScore: number,
    updateScore: (score: number) => void,
    updateBestScore: (bestScore: number) => void,
    resetScore: () => void
};

export const useScoreStore = create<ScoreStoreType>((set) => ({
    score: 0,
    bestScore: 0,
    updateScore: () => set((state) => ({score: state.score + 1})),
    updateBestScore: () => set((state) => ({bestScore: state.bestScore + 1})),
    resetScore: () => set(() => ({score: 0}))
}))