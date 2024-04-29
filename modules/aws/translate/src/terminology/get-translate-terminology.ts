import { type TranslateApiClient } from '../translate-api-client';
import { type GetTranslateTerminologyParameters } from './get-translate-terminology-parameters';

/**
 * Creates a function that returns a Translate terminology
 *
 * @param apiClient Translate API client
 * @returns Function that returns a Translate terminology
 * @see {@link https://docs.aws.amazon.com/translate/latest/APIReference/API_GetTerminology.html GetTerminology}
 */
export function getTranslateTerminology(
  apiClient: TranslateApiClient
): (parameters: GetTranslateTerminologyParameters) => Observable<unknown> {
  const operation = 'GetTerminology';
  return parameters => apiClient({ operation, parameters });
}
