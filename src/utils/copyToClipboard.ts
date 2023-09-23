import type { DogResult, CatResult } from "../utils/types";

export function copyToClipboard(
  dogResult: DogResult,
  catResult: CatResult,
): void {
  if (dogResult.total !== 0) {
    const textToCopy = `${dogResult.name} debe comer ${dogResult.total}gr de alimento diario divididos en:\n► huesos carnosos: ${dogResult.bone}gr\n► carne: ${dogResult.meat}gr\n► hígado: ${dogResult.liver}gr\n► vísceras: ${dogResult.viscera}gr\n► frutas y verduras: ${dogResult.fiber}gr`;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("El contenido ha sido copiado al portapapeles.");
      })
      .catch(() => {
        alert("Error al copiar");
      });
  }
  if (catResult.total !== 0) {
    const textToCopy = `${catResult.name} debe comer ${catResult.total}gr de alimento diario divididos en:\n► huesos carnosos: ${catResult.bone}gr\n► carne: ${catResult.meat}gr\n► corazón: ${catResult.heart}gr\n► hígado: ${catResult.liver}gr\n► vísceras: ${catResult.viscera}gr\n► frutas y verduras: ${catResult.fiber}gr`;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("El contenido ha sido copiado al portapapeles.");
      })
      .catch(() => {
        alert("Error al copiar");
      });
  }
}
