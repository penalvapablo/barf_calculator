import { adultsPercentage } from "./adultsPercentage";
import { ingredientsCalc } from "./ingredients";
import { puppiesPercentage } from "./puppiesPercentage";
import { seniorPercentage } from "./seniorPercentage";
import type { Food, PetData } from "./types";

export function BarfCalulator(petData: PetData): Food {
  const { age, months, weight, state } = petData;

  let foodPercentage = 0;

  let ingredients: Food = {
    total: 0,
    bone: 0,
    fiber: 0,
    meat: 0,
    viscera: 0,
  };

  if (age < 1) foodPercentage = puppiesPercentage(months);
  if (age >= 1 && age <= 10) foodPercentage = adultsPercentage(weight, state);
  if (age > 10) foodPercentage = seniorPercentage(weight, state);

  console.log(foodPercentage);
  const food = weight * foodPercentage * 10;
  const newIngredients = ingredientsCalc(food);

  ingredients = {
    total: food,
    bone: newIngredients.bone,
    fiber: newIngredients.fiber,
    meat: newIngredients.meat,
    viscera: newIngredients.viscera,
  };

  return ingredients;
}
