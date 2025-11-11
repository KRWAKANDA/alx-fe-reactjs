import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  
  // Action to add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Action to set the whole recipe list
  setRecipes: (recipes) => set({ recipes }),
}));


