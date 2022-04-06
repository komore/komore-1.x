import { numberToSquare } from './number-to-square';

describe('To value squared', () => {
  it.each([
    ['negative number', -4, 16],
    ['positive number', 4, 16],
    ['negative bigint', -4n, 16n],
    ['positive bigint', 4n, 16n],
  ])('can return a squared %s', (_, value, expectedResult) => {
    given: 'a value';

    when: 'getting the squared value';
    const result = numberToSquare(value as Parameters<typeof numberToSquare>[0]);

    expect: 'the squared value to have been returned';
    expect(result).toBe(expectedResult);
  });
});
