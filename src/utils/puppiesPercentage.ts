export function puppiesPercentage(months: number): number {
  if (months === 2) return 10;
  if (months === 3) return 9;
  if (months === 4) return 8;
  if (months === 5) return 7;
  if (months === 6 || months === 7) return 6;
  if (months >= 8 && months <= 10) return 4.5;
  if (months === 11 || months === 12) return 4;
  return 0;
}
