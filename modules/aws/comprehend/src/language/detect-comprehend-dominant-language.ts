import { type ComprehendApiClient } from '../comprehend-api-client';
import { type DetectComprehendDominantLanguageParameters } from './detect-comprehend-dominant-language-parameters';
import { type DetectComprehendDominantLanguageResult } from './detect-comprehend-dominant-language-result';

/**
 * Creates a function that determines the dominant languages used in a text
 *
 * @param apiClient Comprehend API client
 * @returns Function that determines the dominant languages used in a text
 * @note {@link https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectDominantLanguage.html DetectDominantLanguage}
 */
export function detectComprehendDominantLanguage(
  apiClient: ComprehendApiClient
): (parameters: DetectComprehendDominantLanguageParameters) => Observable<DetectComprehendDominantLanguageResult> {
  const operation = 'DetectDominantLanguage';
  return parameters => apiClient({ operation, parameters });
}
