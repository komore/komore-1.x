import { type SnsApiClient } from '../sns-api-client';
import { type DeleteSnsTopicParameters } from './delete-sns-topic-parameters';

/**
 * Creates a function that deletes an SNS topic
 *
 * @param apiClient SNS API client
 * @returns Function that deletes an SNS topic
 * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_DeleteTopic.html DeleteTopic}
 */
export function deleteSnsTopic(apiClient: SnsApiClient): (parameters: DeleteSnsTopicParameters) => Observable<void> {
  return parameters =>
    apiClient({
      operation: 'DeleteTopic',
      parameters,
    });
}
