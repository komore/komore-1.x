import { type TranslateLanguageCode } from '../../language/code/translate-language-code';
import { type TranslateTerminologyName } from '../../terminology/name/translate-terminology-name';
import { type TranslateTranslationSettings } from '../translate-translation-settings';

/**
 * Translate translate text parameters
 *
 * @see {@link https://docs.aws.amazon.com/translate/latest/APIReference/API_TranslateText.html#API_TranslateText_RequestParameters TranslateText Request Parameters}
 */
export interface TranslateTranslateTextParameters {
  /**
   * Settings
   */
  readonly Settings?: TranslateTranslationSettings;
  /**
   * Source language code
   */
  readonly SourceLanguageCode: TranslateLanguageCode;
  /**
   * Target language code
   */
  readonly TargetLanguageCode: TranslateLanguageCode;
  /**
   * List of terminology names
   */
  readonly TerminologyNames?: ReadonlyArray<TranslateTerminologyName>;
  /**
   * Text to translate
   */
  readonly Text: string;
}
