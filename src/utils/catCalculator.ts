import type { CatResult, PetData } from "./types";

export function catCalculator(petData: PetData): CatResult {
  const { name, age, months, weight, state } = petData;

  let foodPercentage = 0;

  // FALTAN FUNCIONES GATO
  if (age === "puppy") {
    if (months === 2) foodPercentage = 10;
    if (months === 3) foodPercentage = 9;
    if (months === 4) foodPercentage = 8;
    if (months === 5) foodPercentage = 7;
    if (months === 6 || months === 7) foodPercentage = 6;
    if (months >= 8 && months <= 10) foodPercentage = 4.5;
    if (months === 11 || months === 12) foodPercentage = 3.5;
  }
  if (age === "adult") {
    if (state === "nutered") foodPercentage = 3;
    if (state === "unnutered") foodPercentage = 4;
  }
  if (age === "senior") {
    foodPercentage = 3;
  }

  const food = weight * foodPercentage * 10;

  const ingredients = {
    name: name,
    total: food,
    bone: food * 0.4,
    meat: food * 0.3,
    heart: food * 0.1,
    liver: food * 0.1,
    viscera: food * 0.1,
    fiber: "15",
  };

  return ingredients;
}
