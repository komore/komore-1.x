import { type SnsApiClient } from '../sns-api-client';
import { type SnsSubscriptionEndpointByProtocol } from './protocol/sns-subscription-endpoint-by-protocol';
import { type SubscribeSnsTopicParameters } from './subscribe-sns-topic-parameters';
import { type SubscribeSnsTopicResult } from './subscribe-sns-topic-result';

/**
 * Creates a function that subscribes to an SNS topic
 *
 * @param apiClient SNS API client
 * @returns Function that subscribes to an SNS topic
 * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html }
 */
export function subscribeSnsTopic(
  apiClient: SnsApiClient
): <ProtocolType extends keyof SnsSubscriptionEndpointByProtocol>(
  parameters: SubscribeSnsTopicParameters<ProtocolType>
) => Observable<SubscribeSnsTopicResult> {
  const operation = 'Subscribe';
  return parameters => apiClient({ operation, parameters });
}
