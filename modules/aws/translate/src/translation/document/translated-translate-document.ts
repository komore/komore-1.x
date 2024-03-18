import { type Base64String } from '@komore/string';

/**
 * Translated Translate document
 *
 * @see {@link https://docs.aws.amazon.com/translate/latest/APIReference/API_TranslatedDocument.html TranslatedDocument}
 */
export interface TranslatedTranslateDocument {
  /**
   * Document
   */
  readonly Content: Base64String;
}
