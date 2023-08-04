import { arrayFromRange } from './array-from-range';

describe('Array from range', () => {
  it.each([
    [0, 1, [0]],
    [0, 3, [0, 1, 2]],
    [2, 6, [2, 3, 4, 5]],
    [-1, 3, [-1, 0, 1, 2]],
    [2, 0, [2, 1]],
    [-1, -4, [-1, -2, -3]],
    [2, -2, [2, 1, 0, -1]],
  ])('returns an array with numbers matching a range', (from, to, expectedResult) => {
    given: 'a range';
    const range = {
      from,
      to,
    };

    when: 'creating an array matching the range';
    const result = arrayFromRange(range);

    expect: 'an array with numbers going from the start to the end of the range (included) to have been created';
    expect(result).toStrictEqual(expectedResult);

    where: 'positive and negative from/to values are used';
    /* TODO: from | to || expectedResult
    0    | 1  || [0]
    0    | 3  || [0, 1, 2]
    2    | 6  || [2, 3, 4, 5]
    -1   | 3  || [-1, 0, 1, 2]
    2    | 2  || [2, 1]
    -1   | -4 || [-1, -2, -3]
    2    | -2 || [2, 1, 0, -1]*/
  });
});
