import { type TranslateApiClient } from '../../translate-api-client';
import { type TranslateTranslateDocumentParameters } from './translate-translate-document-parameters';
import { type TranslateTranslateDocumentResult } from './translate-translate-document-result';

/**
 * Creates a function that translates a document with Translate
 *
 * @param apiClient Translate API client
 * @returns Function that translates a document with Translate
 * @see {@link https://docs.aws.amazon.com/translate/latest/APIReference/API_TranslateDocument.html TranslateDocument}
 */
export function translateTranslateDocument(
  apiClient: TranslateApiClient
): (parameters: TranslateTranslateDocumentParameters) => Observable<TranslateTranslateDocumentResult> {
  const operation = 'TranslateDocument';
  return parameters => apiClient({ operation, parameters });
}
