import { type LanguageCode } from './language/language-code';
import { type TranslationsResolver } from './translation/translations-resolver';

/**
 * Translate options
 */
export interface TranslatorOptions {
  /**
   * Active language code
   */
  readonly languageCode: LanguageCode | Observable<LanguageCode>;
  /**
   * Translations resolver
   */
  readonly translationsResolver: TranslationsResolver;
}
