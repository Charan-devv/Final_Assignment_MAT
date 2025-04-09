// calculateRequiredPaint.ts
export function calculateRequiredPaint(length: string, width: string, copies: number): number {
    const l = parseFloat(length);
    const w = parseFloat(width);
  
    if (isNaN(l) || isNaN(w) || copies <= 0) return NaN;
  
    // Area of one triangle * 3 triangles (since it's always 3 triangles on the rectangle)
    const paintRequired = 0.5 * l * w * 3; 
    return paintRequired * copies;
  }