import { type TranslateLanguageCode } from '../../language/code/translate-language-code';
import { type AppliedTranslateTerminology } from '../../terminology/applied-translate-terminology';
import { type TranslateTranslationSettings } from '../translate-translation-settings';

/**
 * Translate translate text result
 *
 * @see {@link https://docs.aws.amazon.com/translate/latest/APIReference/API_TranslateText.html#API_TranslateText_ResponseElements TranslateText Response Elements}
 */
export interface TranslateTranslateTextResult {
  /**
   * Applied settings
   */
  readonly AppliedSettings: TranslateTranslationSettings;
  /**
   * List of applied terminologies
   */
  readonly AppliedTerminologies: ReadonlyArray<AppliedTranslateTerminology>;
  /**
   * Source language code
   */
  readonly SourceLanguageCode: TranslateLanguageCode;
  /**
   * Target language code
   */
  readonly TargetLanguageCode: TranslateLanguageCode;
  /**
   * Translated text
   */
  readonly TranslatedText: string;
}
