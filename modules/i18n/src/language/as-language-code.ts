import { type LanguageCode } from './language-code';
import { validateLanguageCode } from './validate-language-code';

/**
 * Returns a language code, given a language code string
 *
 * @param languageCode Language code string
 * @returns Language code
 */
export function asLanguageCode(languageCode: string): LanguageCode {
  validateLanguageCode(languageCode);
  return languageCode;
}
