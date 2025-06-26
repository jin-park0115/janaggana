import { create } from "zustand";
import { DataItem } from "../api/words";

type WordsState = {
  results: DataItem[];
  setResults: (data: DataItem[]) => void;
};

export const useWordsStore = create<WordsState>((set) => ({
  results: [],
  setResults: (data) => set({ results: data }),
}));
