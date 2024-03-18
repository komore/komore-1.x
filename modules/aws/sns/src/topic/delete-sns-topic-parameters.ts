import { type SnsTopicArn } from './arn/sns-topic-arn';

/**
 * Delete SNS topic parameters
 *
 * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_DeleteTopic.html#API_DeleteTopic_RequestParameters DeleteTopic Request Parameters}
 */
export interface DeleteSnsTopicParameters {
  /**
   * Topic ARN
   */
  readonly TopicArn: SnsTopicArn;
}
