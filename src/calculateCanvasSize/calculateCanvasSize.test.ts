import calculateCanvasSize from './calculateCanvasSize';

describe('calculateCanvasSize', () => {
  test('should calculate area correctly for valid positive numbers', () => {
    const result = calculateCanvasSize('10', '5');
    expect(result).toBe(50); // 10 * 5 = 50
  });
});
