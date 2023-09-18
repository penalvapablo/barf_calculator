export function ingredientsCalc(foodGrams: number) {
  const newIngredients = {
    bone: foodGrams * 0.5,
    meat: foodGrams * 0.3,
    liver: foodGrams * 0.05,
    viscera: foodGrams * 0.05,
    fiber: foodGrams * 0.1,
  };

  return newIngredients;
}
