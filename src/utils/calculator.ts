import { adultsPercentage } from "./adultsPercentage";
import { ingredientsCalc } from "./ingredients";
import { puppiesPercentage } from "./puppiesPercentage";
import { seniorPercentage } from "./seniorPercentage";
import type { Ingredients, PetData } from "./types";

export function BarfCalulator(petData: PetData): Ingredients {
  const { age, months, weight, state } = petData;

  let foodPercentage = 0;

  let ingredients: Ingredients = {
    bone: 0,
    fiber: 0,
    meat: 0,
    viscera: 0,
  };

  if (age < 1) foodPercentage = puppiesPercentage(months);
  if (age > 1 && age < 10) foodPercentage = adultsPercentage(weight, state);
  if (age < 10) foodPercentage = seniorPercentage(weight, state);

  const food = weight * foodPercentage * 10;
  const newIngredients = ingredientsCalc(food);

  ingredients = {
    bone: newIngredients.bone,
    fiber: newIngredients.fiber,
    meat: newIngredients.meat,
    viscera: newIngredients.viscera,
  };

  return ingredients;
}
