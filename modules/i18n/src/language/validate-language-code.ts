import { InvalidLanguageCodeError } from './invalid-language-code-error';
import { type LanguageCode } from './language-code';
import { isLanguageCode } from './is-language-code';

/**
 * Validates that a language code string is a language code
 *
 * @param languageCode Language code string
 */
export function validateLanguageCode(languageCode: string): asserts languageCode is LanguageCode {
  if (!isLanguageCode(languageCode)) {
    throw new InvalidLanguageCodeError(`invalid language code "${languageCode}"`, languageCode);
  }
}
