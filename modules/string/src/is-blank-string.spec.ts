import { isBlankString } from './is-blank-string';

describe('Is blank string', () => {
  it.each([
    ['', true],
    [' ', true],
    ['  ', true],
    ['\t', true],
    ['\r', true],
    ['\n', true],
    ['a', false]
  ])('properly determines whether a string is blank', (str, expectedResult) => {
    expect: 'a blank string to properly be detected';
    expect(isBlankString(str)).toBe(expectedResult);
  });
});
