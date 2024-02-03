import { type LanguageCode } from '../language/language-code';

/**
 * Translation options
 */
export interface TranslationOptions {
  /**
   * Language code
   */
  readonly languageCode: LanguageCode | Observable<LanguageCode>;
  /**
   * Namespace
   */
  readonly namespace?: string;
}
