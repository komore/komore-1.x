import { type LanguageCode } from './language-code';
import { languageCodes } from './language-codes';

/**
 * Tests whether a value is a valid language code
 *
 * @param value Value
 * @returns true if the value is a valid language code
 */
export function isLanguageCode(value: unknown): value is LanguageCode {
  return typeof value === 'string' && set.has(value);
}

/**
 * Set of language codes
 */
const set = new Set<string>(languageCodes);
