const solution = require('./multiples_of_3_or_5');

describe('Solution', () => {
  test('sum of multiples of 3 or 5 below 10 is 23', () => {
    expect(solution(10)).toBe(23);
  });

  test('sum of multiples of 3 or 5 below 16 is 60', () => {
    expect(solution(16)).toBe(60);
  });

  test('sum of multiples of 3 or 5 below 0 is 0', () => {
    expect(solution(0)).toBe(0);
  });

  test('sum of multiples of 3 or 5 below -10 is 0', () => {
    expect(solution(-10)).toBe(0);
  });
});
