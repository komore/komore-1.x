import { type SnsTopicArn } from './arn/sns-topic-arn';

/**
 * Create SNS topic result
 *
 * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html#API_CreateTopic_ResponseElements CreateTopic Response Elements}
 */
export interface CreateSnsTopicResult {
  /**
   * Topic ARN
   */
  readonly TopicArn: SnsTopicArn;
}
