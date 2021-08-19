import { fromRepeated } from './from-repeated';

describe('From repeated', () => {
  it.each([
    ['x', 3, ['x', 'x', 'x']],
    ['y', 0, []]
  ])('returns an array repeating a value the correct number of times', (value, count, expectedResult) => {
    given: 'a value and a repetition count';
    when: 'creating an array that repeats the value';
    const result = fromRepeated(value, count);
    expect: 'an array with the same value repeated the specified number of times to have been returned';
    expect(result).toStrictEqual(expectedResult);
  });
});
