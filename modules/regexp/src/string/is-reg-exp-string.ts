import { RegExpString } from './reg-exp-string';

/**
 * Tests whether a string is a regular expression string
 *
 * @param value Value
 * @returns true if the string is a regular expression string
 */
export function isRegExpString(value: string): value is RegExpString {
  try {
    new RegExp(value);
    return true;
  } catch {
    return false;
  }
}
