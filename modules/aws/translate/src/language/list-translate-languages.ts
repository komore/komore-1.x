import { type TranslateApiClient } from '../translate-api-client';
import { type ListTranslateLanguagesParameters } from './list-translate-languages-parameters';
import { type ListTranslateLanguagesResult } from './list-translate-languages-result';

/**
 * Creates a function that lists Translate languages
 *
 * @param apiClient Translate API client
 * @returns Function that lists Translate languages
 * @see {@link https://docs.aws.amazon.com/translate/latest/APIReference/API_ListLanguages.html ListLanguages}
 */
export function listTranslateLanguages(
  apiClient: TranslateApiClient
): (parameters: ListTranslateLanguagesParameters) => Observable<ListTranslateLanguagesResult> {
  const operation = 'ListLanguages';
  return parameters => apiClient({ operation, parameters });
}
