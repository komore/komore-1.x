import { type HexColorString } from '../hex/hex-color-string';
import { type RGB } from '../rgb/rgb';
import { HEX_COLOR_STRING_REGEXP, HEX_COLOR_STRING_REGEXP_SHORT } from './hex-color-string-regexp';

/**
 * Returns an RGB color from a hexadecimal color string
 * @param hexColorString Hexadecimal color string
 * @returns RGB color
 */
export function hexColorStringToRgbColor(hexColorString: HexColorString): RGB {
  const isShort = hexColorString.length === 4;
  const matches = hexColorString.match(isShort ? HEX_COLOR_STRING_REGEXP_SHORT : HEX_COLOR_STRING_REGEXP);
  if (matches === null) {
    throw new Error(`invalid hexadecimal color string "${hexColorString}`);
  }

  const divisor = isShort ? 15 : 255;
  const redValue = parseInt(matches[1], 16);
  const greenValue = parseInt(matches[2], 16);
  const blueValue = parseInt(matches[3], 16);
  const red = redValue / divisor;
  const green = greenValue / divisor;
  const blue = blueValue / divisor;

  return {
    red,
    green,
    blue
  };
}
