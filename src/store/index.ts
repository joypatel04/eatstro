import AsyncStorage from "@react-native-async-storage/async-storage";
import create from "zustand";
import { persist } from "zustand/middleware";

import { IStore } from "~/types";

export const useStore = create<IStore>()(
  persist(
    (set, get) => ({
      suggestions: [],
      addToSuggestions: (suggestion: string): void => {
        set(() => {
          if (get().suggestions.includes(suggestion)) {
            // If same suggestion included in list remove it from the list and add it on top
            return {
              suggestions: [
                suggestion,
                ...get().suggestions.filter((s) => s !== suggestion),
              ].slice(0, 7),
            };
          }
          return {
            suggestions: [suggestion, ...get().suggestions].slice(0, 7),
          };
        });
      },
      removeFromSuggestions: (suggestion: string): void => {
        set(() => ({
          suggestions: get().suggestions.filter((item) => item !== suggestion),
        }));
      },
      clearSuggestions: (): void => {
        set({ suggestions: [] });
      },
    }),
    {
      name: "eatstro-app-storage",
      getStorage: () => AsyncStorage,
    }
  )
);
