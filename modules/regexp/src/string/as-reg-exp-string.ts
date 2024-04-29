import { type RegExpString } from './reg-exp-string';
import { validateRegExpString } from './validate-reg-exp-string';

/**
 * Safely casts a string to a regular expression string
 *
 * @param value String
 * @returns Regular expression string
 */
export function asRegExpString(value: string): RegExpString {
  validateRegExpString(value);
  return value;
}
