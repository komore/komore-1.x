import { type TranslateLanguageCode } from '../../language/code/translate-language-code';
import { type AppliedTranslateTerminology } from '../../terminology/applied-translate-terminology';
import { type TranslateTranslationSettings } from '../translate-translation-settings';
import { type TranslatedTranslateDocument } from './translated-translate-document';

/**
 * Translate Translate document result
 *
 * @see {@link https://docs.aws.amazon.com/translate/latest/APIReference/API_TranslateDocument.html#API_TranslateDocument_ResponseElements TranslateDocument Response Elements}
 */
export interface TranslateTranslateDocumentResult {
  /**
   * Applied settings
   */
  readonly AppliedSettings: Omit<TranslateTranslationSettings, 'Brevety'>;
  /**
   * Applied terminologies
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
   * Translated document
   */
  readonly TranslatedDocument: TranslatedTranslateDocument;
}
