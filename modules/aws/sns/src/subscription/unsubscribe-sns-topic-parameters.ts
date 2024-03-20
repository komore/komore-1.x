import { type SnsSubscriptionArn } from './arn/sns-subscription-arn';

/**
 * Unsubscribe SNS topic parameters
 *
 * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_Unsubscribe.html#API_Unsubscribe_RequestParameters Unsubscribe Request Parameters}
 */
export interface UnsubscribeSnsTopicParameters {
  /**
   * Subscription ARN
   */
  readonly SubscriptionArn: SnsSubscriptionArn;
}
