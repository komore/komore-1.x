import { type LanguageCode } from '../language/language-code';

/**
 * Builds a formatter key from a language code, an optional namespace and a key
 *
 * @param languageCode Language code
 * @param namespace Namespace
 * @param key Key
 * @returns Formatter key
 * @private
 */
export function buildFormatterKey(languageCode: LanguageCode, namespace: string | undefined, key: string): string {
  return `${namespace ?? ''}:${languageCode}:${key}`;
}
