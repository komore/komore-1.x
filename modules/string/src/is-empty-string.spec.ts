import { isEmptyString } from './is-empty-string';

describe('Is empty string', () => {
  it.each([
    ['', true],
    [' ', false],
    ['  ', false],
    ['\t', false],
    ['\r', false],
    ['\n', false],
    ['a', false]
  ])('properly determines whether a string is empty', (str, expectedResult) => {
    expect: 'an empty string to properly be detected';
    expect(isEmptyString(str)).toBe(expectedResult);
  });
});
