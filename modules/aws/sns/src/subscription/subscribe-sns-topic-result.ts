import { type SnsSubscriptionArn } from './arn/sns-subscription-arn';

/**
 * Subscribe SNS topic result
 */
export interface SubscribeSnsTopicResult {
  /**
   * Subscription ARN
   */
  readonly SubscriptionArn: SnsSubscriptionArn;
}
