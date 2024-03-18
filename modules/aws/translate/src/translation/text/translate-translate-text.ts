import { type TranslateApiClient } from '../../translate-api-client';
import { translateTargetPrefix } from '../../translate-target-prefix';
import { type TranslateTranslateTextParameters } from './translate-translate-text-parameters';
import { type TranslateTranslateTextResult } from './translate-translate-text-result';

/**
 * Creates a function that translates text using Translate
 *
 * @param apiClient Translate API client
 * @returns Function that translates text using Translate
 * @see {@link https://docs.aws.amazon.com/translate/latest/APIReference/API_TranslateText.html TranslateText}
 */
export function translateTranslateText(
  apiClient: TranslateApiClient
): (parameters: TranslateTranslateTextParameters) => Observable<TranslateTranslateTextResult> {
  return parameters =>
    apiClient({
      operation: `${translateTargetPrefix}.TranslateText`,
      parameters,
    });
}
