import { colorError } from '../color.error';
import { type HexColorString } from '../hex/hex-color-string';
import { type RGBColor } from '../rgb/rgb-color';
import { HEX_COLOR_STRING_REGEXP, HEX_COLOR_STRING_REGEXP_SHORT } from './hex-color-string-regexp';

/**
 * Returns an RGB color from a hexadecimal color string
 *
 * @param hexColorString Hexadecimal color string
 * @returns RGB color
 */
export function hexColorStringToRgbColor(hexColorString: HexColorString): RGBColor {
  const isShort = hexColorString.length === 4;
  const matches = hexColorString.match(isShort ? HEX_COLOR_STRING_REGEXP_SHORT : HEX_COLOR_STRING_REGEXP) as
    | readonly [matched: string, red: string, green: string, blue: string]
    | null;
  if (matches === null) {
    throw colorError.invalidHexColorString({ hexColorString });
  }

  const [, redString, greenString, blueString] = matches;
  const redValue = parseInt(redString, 16);
  const greenValue = parseInt(greenString, 16);
  const blueValue = parseInt(blueString, 16);
  const divisor = isShort ? 15 : 255;
  const red = redValue / divisor;
  const green = greenValue / divisor;
  const blue = blueValue / divisor;

  return {
    red,
    green,
    blue,
  };
}
