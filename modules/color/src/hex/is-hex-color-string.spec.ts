// TODO: import { expectTypeOf } from 'expect-type';
// TODO: import { type HexColorString } from './hex-color-string';
import { isHexColorString } from './is-hex-color-string';

describe('Is hexadecimal color string', () => {
  it.each([
    ['', false],
    ['#000000', true],
    ['#000', true],
    ['#0000000', false],
    ['#0000', false],
    ['#00', false],
    ['#123456', true],
    ['#1f3f7f', true],
    ['#ffefdf', true],
    ['#ffEfDF', true],
    ['#ffffff', true],
    ['#fffffg', false],
    ['#17f', true],
    ['#1gf', false],
  ])('returns whether a string is a valid hexadecimal color string', (string, expectedResult) => {
    given: 'a string';

    when: 'testing whether the string is a hexadecimal color string';
    const result = isHexColorString(string);

    expect: 'true to have been returned if the string is a valid hexadecimal color string';
    expect(result).toBe(expectedResult);
  });
});
