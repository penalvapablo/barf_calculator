import { adultsPercentage } from "./adultsPercentage";
import { ingredientsCalc } from "./ingredients";
import { puppiesPercentage } from "./puppiesPercentage";
import { seniorPercentage } from "./seniorPercentage";
import type { Food, PetData } from "./types";

export function BarfCalulator(petData: PetData): Food {
  const { age, months, weight, state } = petData;

  let foodPercentage = 0;

  if (age === "puppy") foodPercentage = puppiesPercentage(months);
  if (age === "adult") foodPercentage = adultsPercentage(weight, state);
  if (age === "senior") foodPercentage = seniorPercentage(weight);

  const food = weight * foodPercentage * 10;
  const newIngredients = ingredientsCalc(food);

  const ingredients = {
    total: food,
    bone: newIngredients.bone,
    fiber: newIngredients.fiber,
    meat: newIngredients.meat,
    viscera: newIngredients.viscera,
    liver: newIngredients.liver,
  };

  return ingredients;
}
