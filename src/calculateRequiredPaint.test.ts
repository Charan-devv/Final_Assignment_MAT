// calculateRequiredPaint.test.ts
import { calculateRequiredPaint } from './calculateRequiredPaint';

describe('calculateRequiredPaint', () => {
  test('should calculate total paint required for 5000 copies of 3m x 2m work', () => {
    const result = calculateRequiredPaint('3', '2', 5000);
    expect(result).toBe(15000); // 0.5 * 3 * 2 * 5000 = 15000
  });
});