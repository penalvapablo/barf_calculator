import type { DogResult, PetData } from "./types";

export function dogCalculator(petData: PetData): DogResult {
  const { name, age, months, weight, state } = petData;

  let foodPercentage = 0;

  if (age === "puppy") {
    if (months === 2) foodPercentage = 10;
    if (months === 3) foodPercentage = 9;
    if (months === 4) foodPercentage = 8;
    if (months === 5) foodPercentage = 7;
    if (months === 6 || months === 7) foodPercentage = 6;
    if (months >= 8 && months <= 10) foodPercentage = 4.5;
    if (months === 11 || months === 12) foodPercentage = 4;
  }
  if (age === "adult") {
    if (state === "nutered" && weight < 10) foodPercentage = 3.5;
    if (state === "nutered" && weight >= 10) foodPercentage = 2.5;
    if (state === "unnutered" && weight < 10) foodPercentage = 4;
    if (state === "unnutered" && weight >= 10) foodPercentage = 3;
  }
  if (age === "senior") {
    if (weight < 10) foodPercentage = 3;
    if (weight >= 10) foodPercentage = 2;
  }

  const food = weight * foodPercentage * 10;

  const result = {
    name: name,
    total: food,
    bone: food * 0.5,
    meat: food * 0.3,
    liver: food * 0.05,
    viscera: food * 0.05,
    fiber: food * 0.1,
  };

  return result;
}
