import { type SnsApiClient } from '../sns-api-client';
import { type CreateSnsTopicParameters } from './create-sns-topic-parameters';
import { type CreateSnsTopicResult } from './create-sns-topic-result';

/**
 * Creates a function that creates an SNS topic
 *
 * @param apiClient SNS API client
 * @returns Function that creates an SNS topic
 * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html CreateTopic}
 */
export function createSnsTopic(
  apiClient: SnsApiClient
): (parameters: CreateSnsTopicParameters) => Observable<CreateSnsTopicResult> {
  const operation = 'CreateTopic';
  return parameters => apiClient({ operation, parameters });
}
