import { type HexColorString } from '../hex/hex-color-string';
import { fromHexColorString } from './from-hex-color-string';

describe('From hexadecimal color string', () => {
  it.each([
    ['#000000', { red: 0, green: 0, blue: 0 }],
    ['#000', { red: 0, green: 0, blue: 0 }],
    ['#996633', { red: 0.6, green: 0.4, blue: 0.2 }],
    ['#963', { red: 0.6, green: 0.4, blue: 0.2 }]
  ])('returns an RGB color from an hexadecimal color string', (hexColorString, expectedResult) => {
    given: 'a hexadecimal color string';
    when: 'converting it to an RGB color';
    const result = fromHexColorString(hexColorString as HexColorString);
    expect: 'a proper RGB color object to have been built';
    expect(result).toStrictEqual(expectedResult);
  });

  it.each(['', '0000000', '00000', '1f2f3g', 'g3d'])(
    'throws an error when given an invalid hexadecimal color string',
    hexColorString => {
      given: 'a hexadecimal color string';
      expect: 'an error to be thrown when attempting to convert an invalid hexadecimal color string';
      expect(() => fromHexColorString(hexColorString as HexColorString)).toThrowError(
        `invalid hexadecimal color string "${hexColorString}`
      );
    }
  );
});
