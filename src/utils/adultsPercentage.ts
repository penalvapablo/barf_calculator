export function adultsPercentage(
  weight: number,
  state: "nutered" | "unnutered",
): number {
  if (state === "nutered" && weight < 10) return 4;
  if (state === "nutered" && weight > 10) return 3;
  if (state === "unnutered" && weight < 10) return 4.5;
  if (state === "unnutered" && weight > 10) return 3.5;

  return 0;
}
