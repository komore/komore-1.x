import { type TranslateLanguageCode } from '../../language/code/translate-language-code';
import { type TranslateTranslationSettings } from '../translate-translation-settings';

/**
 * Translate Translate document parameters
 *
 * @see {@link https://docs.aws.amazon.com/translate/latest/APIReference/API_TranslateDocument.html#API_TranslateDocument_RequestParameters TranslateDocument Request Parameters}
 */
export interface TranslateTranslateDocumentParameters {
  /**
   * Document to translate
   */
  readonly Document: unknown;
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
   * Terminology names
   */
  readonly TerminologyNames?: ReadonlyArray<string>;
}
