import { type SnsApiClient } from '../sns-api-client';
import { type ConfirmSnsSubscriptionParameters } from './confirm-sns-subscription-parameters';
import { type ConfirmSnsSubscriptionResult } from './confirm-sns-subscription-result';

/**
 * Creates a function that confirms an SNS subscription
 *
 * @param apiClient SNS API client
 * @returns Function that confirms an SNS subscription
 * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_ConfirmSubscription.html ConfirmSubscription}
 */
export function confirmSnsSubscription(
  apiClient: SnsApiClient
): (parameters: ConfirmSnsSubscriptionParameters) => Observable<ConfirmSnsSubscriptionResult> {
  const operation = 'Confirm';
  return parameters => apiClient({ operation, parameters });
}
