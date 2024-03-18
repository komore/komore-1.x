import { type SnsApiClient } from '../sns-api-client';
import { snsTargetPrefix } from '../sns-target-prefix';
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

// TODO: automatically turn parameters into query parameters?
/*
https://sns.us-east-2.amazonaws.com/?Action=DeleteTopic
&TopicArn=arn%3Aaws%3Asns%3Aus-east-2%3A123456789012%3AMy-Topic
&Version=2010-03-31
&AUTHPARAMS
*/
