import { arrayFromRepeatedValue } from './array-from-repeated-value';

describe('Array from repeated value', () => {
  it.each([
    ['x', 3, ['x', 'x', 'x']],
    ['y', 0, []],
  ])('returns an array repeating a value the correct number of times', (value, count, expectedResult) => {
    given: 'a value and a repetition count';
    when: 'creating an array that repeats the value';
    const result = arrayFromRepeatedValue(value, count);
    expect: 'an array with the same value repeated the specified number of times to have been returned';
    expect(result).toStrictEqual(expectedResult);
  });
});
