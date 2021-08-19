import { fromRange } from './from-range';

describe('From range', () => {
  it.each([
    [0, 0, [0]],
    [0, 2, [0, 1, 2]],
    [2, 5, [2, 3, 4, 5]],
    [-1, 2, [-1, 0, 1, 2]],
    [2, 1, [2, 1]],
    [-1, -3, [-1, -2, -3]],
    [2, -1, [2, 1, 0, -1]]
  ])('returns an array with numbers matching a range', (from, to, expectedResult) => {
    given: 'a range';
    when: 'creating an array matching the range';
    const result = fromRange(from, to);
    expect: 'an array with numbers going from the start to the end of the range (included) to have been created';
    expect(result).toStrictEqual(expectedResult);
  });
});
