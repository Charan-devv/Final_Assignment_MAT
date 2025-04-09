import calculateCanvasSize from './calculateCanvasSize';

describe('calculateCanvasSize', () => {
  test('should calculate area correctly for valid positive numbers', () => {
    const result = calculateCanvasSize('10', '5');
    expect(result).toBe(50); // 10 * 5 = 50
  });
  test('should return 0 if either dimension is 0', () => {
    expect(calculateCanvasSize('0', '10')).toBe(0);
    expect(calculateCanvasSize('10', '0')).toBe(0);
  });
  test('should return NaN for non-numeric input', () => {
    expect(calculateCanvasSize('a', '5')).toBeNaN();
    expect(calculateCanvasSize('10', 'b')).toBeNaN();
  });
});
