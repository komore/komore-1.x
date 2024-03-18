import { type Base64String } from '@komore/string';

import { type TranslateDocumentContentType } from './translate-document-content-type';

/**
 * Translate document
 *
 * @see {@link https://docs.aws.amazon.com/translate/latest/APIReference/API_Document.html Document}
 */
export interface TranslateDocument {
  /**
   * Content
   */
  readonly Content: Base64String;
  /**
   * Content type
   */
  readonly ContentType: TranslateDocumentContentType;
}
