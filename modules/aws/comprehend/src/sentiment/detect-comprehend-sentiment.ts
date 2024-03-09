import { type ComprehendApiClient } from '../comprehend-api-client';
import { comprehendTargetPrefix } from '../comprehend-target-prefix';
import { type DetectComprehendSentimentParameters } from './detect-comprehend-sentiment-parameters';
import { type DetectComprehendSentimentResult } from './detect-comprehend-sentiment-result';

/**
 * Creates a function that determines sentiment from a text
 *
 * @param apiClient Comprehend API client
 * @returns Function that determines sentimend from a text
 * @see {@link https://docs.aws.amazon.com/comprehend/latest/dg/API_DetectSentiment.html DetectSentiment}
 */
export function detectComprehendSentiment(
  apiClient: ComprehendApiClient
): (parameters: DetectComprehendSentimentParameters) => Observable<DetectComprehendSentimentResult> {
  return parameters =>
    apiClient({
      operation: `${comprehendTargetPrefix}.DetectSentiment`,
      parameters,
    });
}
