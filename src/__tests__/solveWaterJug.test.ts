// waterJug.test.ts
import solveWaterJug from '../solveWaterJug.tsx'; // Asegúrate de exportar la función en tu archivo principal

describe('Water Jug Challenge - solveWaterJug', () => {
  // Typic case: Possible solution
  test('Should find a solution for X=2, Y=10, Z=4', () => {
    const result = solveWaterJug(2, 10, 4);
    expect(result).toEqual([
      { x: 2, y: 0, action: 'Fill Jug X' },
      { x: 0, y: 2, action: 'Transfer 2 gallons from X to Y' },
      { x: 2, y: 2, action: 'Fill Jug X' },
      { x: 0, y: 4, action: 'Transfer to get 4 gallons.' }, 
    ]);
  });

  // Typic case: Possible solution
  test('Should find a solution for X=3, Y=5, Z=4', () => {
    const result = solveWaterJug(3, 5, 4);
    expect(result).toEqual([
      { x: 0, y: 5, action: 'Fill Jug Y' },
      { x: 3, y: 2, action: 'Transfer 3 gallons from Y to X' },
      { x: 0, y: 2, action: 'Empty Jug X' },
      { x: 2, y: 0, action: 'Transfer 2 gallons from Y to X' },
      { x: 2, y: 5, action: 'Fill Jug Y' },
      { x: 3, y: 4, action: 'Transfer 1 gallons from Y to X' },
    ]);
  });

  // No solution case: Z is greater than X and Y
  test('Should return null to X=2, Y=3, Z=6 (Z > X + Y)', () => {
    const result = solveWaterJug(2, 3, 6);
    expect(result).toBeNull();
  });

  // No solution case: Z is not divisible by the GCD of X and Y
  test('Should return null to X=4, Y=6, Z=5 (Z not divisible by GCD)', () => {
    const result = solveWaterJug(4, 6, 5);
    expect(result).toBeNull();
  });

  // Extreme case: X and Y are equal
  test('Should return null to X=5, Y=5, Z=3 (X e Y both same, Z not reachable)', () => {
    const result = solveWaterJug(5, 5, 3);
    expect(result).toBeNull();
  });

  // Extreme case: Z is 0
  test('Should return an empty solution for X=2, Y=3, Z=0 (Z = 0)', () => {
    const result = solveWaterJug(2, 3, 0);
    expect(result).toEqual([]);
  });

  // Extreme case: X or Y is 0
  test('Should return null para X=0, Y=5, Z=3 (X = 0)', () => {
    const result = solveWaterJug(0, 5, 3);
    expect(result).toBeNull();
  });

  // Extreme case: Z is equal to X or Y
  test('Should find a solution for X=2, Y=10, Z=10 (Z = Y)', () => {
    const result = solveWaterJug(2, 10, 10);
    expect(result).toEqual([
      { x: 0, y: 10, action: 'Fill Jug Y' },
    ]);
  });
});