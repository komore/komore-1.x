import { type SnsSubscriptionArn } from './arn/sns-subscription-arn';

/**
 * Confirm SNS subscription result
 *
 * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_ConfirmSubscription.html#API_ConfirmSubscription_ResponseElements ConfirmSubscription Response Elements}
 */
export interface ConfirmSnsSubscriptionResult {
  /**
   * Subscription ARN
   */
  readonly SubscriptionArn: SnsSubscriptionArn;
}
