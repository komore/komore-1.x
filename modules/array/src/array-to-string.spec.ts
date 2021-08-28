import { arrayToString } from './array-to-string';

describe('Array to string', () => {
  it.each([
    [undefined, [1, 2, 3], '1,2,3'],
    ['.', [1, 2, 3], '1.2.3'],
    [' . ', [1, 2, 3], '1 . 2 . 3'],
    ['.', [], '']
  ])('creates a function that returns a string from an array', (separator, array, expectedResult) => {
    given: 'a separator and an array';
    when: 'creating a function that returns a string from an array using the separator';
    const func = arrayToString(separator);
    and: 'calling it';
    const result = func(array);
    expect: 'a string containing the concatenated string representation of the array elements to have been returned';
    expect(result).toBe(expectedResult);
  });
});
