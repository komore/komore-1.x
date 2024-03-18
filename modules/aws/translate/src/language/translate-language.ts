/**
 * Translate language
 *
 * @see {@link https://docs.aws.amazon.com/translate/latest/APIReference/API_Language.html Language}
 */
export interface TranslateLanguage {
  /**
   * Language code
   */
  readonly LanguageCode: string; // TODO: typed
  /**
   * Language name
   */
  readonly LanguageName: string;
}
