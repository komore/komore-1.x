import { toValueSquared } from './to-value-squared';

describe('To value squared', () => {
  it.each([
    ['negative number', -4, 16],
    ['positive number', 4, 16],
    ['negative bigint', -4n, 16n],
    ['positive bigint', 4n, 16n]
  ])('can return a squared %s', (_, value, expectedResult) => {
    given: 'a value';
    when: 'getting the squared value';
    const result = toValueSquared(value as Parameters<typeof toValueSquared>[0]);
    expect: 'the squared value to have been returned';
    expect(result).toBe(expectedResult);
  });
});
