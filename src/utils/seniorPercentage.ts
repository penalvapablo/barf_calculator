export function seniorPercentage(
  weight: number,
  state: "nutered" | "unnutered",
): number {
  if (state === "nutered" && weight < 10) return 3;
  if (state === "nutered" && weight > 10) return 2;
  if (state === "unnutered" && weight < 10) return 3;
  if (state === "unnutered" && weight > 10) return 2.5;

  return 0;
}
