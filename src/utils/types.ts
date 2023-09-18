export type PetData = {
  name: string;
  age: "puppy" | "adult" | "senior";
  months: number;
  weight: number;
  state: "nutered" | "unnutered";
};

export type Food = {
  total: number;
  bone: number;
  meat: number;
  liver: number;
  viscera: number;
  fiber: number;
};
