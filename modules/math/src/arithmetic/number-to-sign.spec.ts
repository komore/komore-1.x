import { numberToSign } from './number-to-sign';

describe('Number to sign', () => {
  it.each([
    ['negative number', -4, -1],
    ['negative bigint', -4n, -1],
    ['positive number', 4, 1],
    ['positive bigint', 4n, 1],
    ['number with a value of 0', 0, 0],
    ['bigint with a value of 0', 0n, 0],
  ])('can return the sign of a %s', (_, value, expectedSign) => {
    given: 'a value';

    when: 'getting the sign';
    const result = numberToSign(value as Parameters<typeof numberToSign>[0]);

    expect: 'the correct sign to have been returned';
    expect(result).toBe(expectedSign);
  });
});
