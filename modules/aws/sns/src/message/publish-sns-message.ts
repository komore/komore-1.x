import { type SnsApiClient } from '../sns-api-client';
import { type PublishSnsMessageParameters } from './publish-sns-message-parameters';
import { type PublishSnsMessageResult } from './publish-sns-message-result';

/**
 * Creates a function that publishes an SNS message
 *
 * @param apiClient SNS API client
 * @returns Function that publishes an SNS message
 * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_Publish.html Publish}
 */
export function publishSnsMessage(
  apiClient: SnsApiClient
): (parameters: PublishSnsMessageParameters) => Observable<PublishSnsMessageResult> {
  const operation = 'Publish';
  return parameters => apiClient({ operation, parameters });
}
