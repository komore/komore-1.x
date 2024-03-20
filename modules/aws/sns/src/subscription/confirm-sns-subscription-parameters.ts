import { type SnsTopicArn } from '../topic/arn/sns-topic-arn';
import { type SnsSubscriptionToken } from './token/sns-subscription-token';

/**
 * Confirm SNS subscription parameters
 *
 * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_ConfirmSubscription.html#API_ConfirmSubscription_RequestParameters ConfirmSubscription Request Parameters}
 */
export interface ConfirmSnsSubscriptionParameters {
  /**
   * Whether unsubscribing requires an authentication
   */
  readonly AuthenticateOnSubscribe?: boolean;
  /**
   * Short-lived token sent during the subscription action
   */
  readonly Token: SnsSubscriptionToken;
  /**
   * Topic ARN
   */
  readonly TopicArn: SnsTopicArn;
}
