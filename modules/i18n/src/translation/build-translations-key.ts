import { type LanguageCode } from '../language/language-code';

/**
 * Builds a translations key from a language code and an optional namespace
 *
 * @param languageCode Language code
 * @param namespace Namespace
 * @returns Translations keys
 * @private
 */
export function buildTranslationsKey(languageCode: LanguageCode, namespace: string | undefined): string {
  return `${namespace ?? ''}:${languageCode}`;
}
