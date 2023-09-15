import type { Ingredients } from "./types";

export function ingredientsCalc(foodGrams: number): Ingredients {
  const newIngredients: Ingredients = {
    bone: foodGrams * 0.5,
    meat: foodGrams * 0.3,
    viscera: foodGrams * 0.1,
    fiber: foodGrams * 0.1,
  };

  return newIngredients;
}
