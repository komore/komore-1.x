import { type TranslateApiClient } from '../translate-api-client';
import { type DeleteTranslateTerminologyParameters } from './delete-translate-terminology-parameters';

/**
 * Creates a function that deletes a Translate terminology
 *
 * @param apiClient Translate API client
 * @returns Function that deletes a Translate terminology
 * @see {@link https://docs.aws.amazon.com/translate/latest/APIReference/API_DeleteTerminology.html DeleteTerminology}
 */
export function deleteTranslateTerminology(
  apiClient: TranslateApiClient
): (parameters: DeleteTranslateTerminologyParameters) => Observable<void> {
  const operation = 'DeleteTerminology';
  return parameters => apiClient({ operation, parameters });
}
