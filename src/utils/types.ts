export type PetData = {
  type: "dog" | "cat";
  name: string;
  age: "puppy" | "adult" | "senior";
  months: number;
  weight: number;
  state: "nutered" | "unnutered";
};

export type DogResult = {
  name: string;
  total: number;
  bone: number;
  meat: number;
  liver: number;
  viscera: number;
  fiber: number;
};

export type CatResult = {
  name: string;
  total: number;
  bone: number;
  meat: number;
  heart: number;
  liver: number;
  viscera: number;
  fiber: string;
};
