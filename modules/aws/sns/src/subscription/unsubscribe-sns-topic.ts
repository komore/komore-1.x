import { type SnsApiClient } from '../sns-api-client';
import { type UnsubscribeSnsTopicParameters } from './unsubscribe-sns-topic-parameters';

/**
 * Creates a function that unsubscribes from an SNS topic
 *
 * @param apiClient SNS API client
 * @returns Function that unsubscribes from an SNS topic
 * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_Unsubscribe.html Unsubscribe}
 */
export function unsubscribeSnsTopic(
  apiClient: SnsApiClient
): (parameters: UnsubscribeSnsTopicParameters) => Observable<void> {
  const operation = 'Unsubscribe';
  return parameters => apiClient({ operation, parameters });
}
