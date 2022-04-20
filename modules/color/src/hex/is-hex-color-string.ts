import { type HexColorString } from '../hex/hex-color-string';
import { HEX_COLOR_STRING_REGEXP, HEX_COLOR_STRING_REGEXP_SHORT } from '../hex/hex-color-string-regexp';

/**
 * Tests whether a string is a valid hexadecimal color string
 *
 * @param string String
 * @returns true if the string is a valid hexadecimal color string
 */
export function isHexColorString(string: string): string is HexColorString {
  const longMatch = string.length === 7 && string.match(HEX_COLOR_STRING_REGEXP) !== null;
  if (longMatch) {
    return true;
  }

  return string.length === 4 && string.match(HEX_COLOR_STRING_REGEXP_SHORT) !== null;
}
