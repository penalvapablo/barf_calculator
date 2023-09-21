export function seniorPercentage(weight: number): number {
  if (weight < 10) return 3;
  if (weight >= 10) return 2;

  return 0;
}
