/**
 * Translate translation settings
 *
 * @see {@link https://docs.aws.amazon.com/translate/latest/APIReference/API_TranslationSettings.html TranslationSettings}
 */
export interface TranslateTranslationSettings {
  /**
   * Brevety
   */
  readonly Brevety?: 'ON';
  /**
   * Formality
   */
  readonly Formality?: 'FORMAL' | 'INFORMAL';
  /**
   * Profanity
   */
  readonly Profanity?: 'MASK';
}
