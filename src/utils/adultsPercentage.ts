export function adultsPercentage(
  weight: number,
  state: "nutered" | "unnutered",
): number {
  console.log(weight, state);
  if (state === "nutered" && weight < 10) return 3.5;
  if (state === "nutered" && weight >= 10) return 2.5;
  if (state === "unnutered" && weight < 10) return 4;
  if (state === "unnutered" && weight >= 10) return 3;

  return 0;
}
