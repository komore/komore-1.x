import { HEX_COLOR_STRING_REGEXP, HEX_COLOR_STRING_REGEXP_SHORT } from './hex-color-string-regexp';

/**
 * Tests whether a string is a valid hexadecimal color string
 * @param string String
 * @returns true if the string is a valid hexadecimal color string
 */
export function isHexColorString(string: string): boolean {
  return string.match(HEX_COLOR_STRING_REGEXP) !== null || string.match(HEX_COLOR_STRING_REGEXP_SHORT) !== null;
}
