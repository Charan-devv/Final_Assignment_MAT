export default function calculateCanvasDiagonal(length: string, width: string): number {
  const l = parseFloat(length);
  const w = parseFloat(width);

  if (isNaN(l) || isNaN(w)) return NaN;

  const absLength = Math.abs(l);
  const absWidth = Math.abs(w);

  return Math.sqrt(absLength ** 2 + absWidth ** 2);
}