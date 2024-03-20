import { type SnsApiClient } from '../sns-api-client';
import { type ListSnsSubscriptionsParameters } from './list-sns-subscriptions-parameters';
import { type ListSnsSubscriptionsResult } from './list-sns-subscriptions-result';

/**
 * Creates a function that lists SNS subscriptions
 *
 * @param apiClient SNS API client
 * @returns Function that lists SNS subscriptions
 * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_ListSubscriptions.html ListSubscriptions}
 */
export function listSnsSubscriptions(
  apiClient: SnsApiClient
): (parameters: ListSnsSubscriptionsParameters) => Observable<ListSnsSubscriptionsResult> {
  const operation = 'ListSubscriptions';
  return parameters => apiClient({ operation, parameters });
}
