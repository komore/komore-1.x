import { type AwsAccountId } from '@komore/aws';

import { type SnsTopicArn } from '../topic/arn/sns-topic-arn';
import { type SnsSubscriptionArn } from './arn/sns-subscription-arn';
import { type SnsSubscriptionEndpointByProtocol } from './protocol/sns-subscription-endpoint-by-protocol';

/**
 * SNS subscription
 *
 * @template ProtocolType Protocol type
 * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_Subscription.html Subscription}
 */
export interface SnsSubscription<
  ProtocolType extends keyof SnsSubscriptionEndpointByProtocol = keyof SnsSubscriptionEndpointByProtocol,
> {
  /**
   * Endpoint
   */
  readonly Endpoint: SnsSubscriptionEndpointByProtocol[ProtocolType];
  /**
   * Owner
   */
  readonly Owner: AwsAccountId;
  /**
   * Protocol
   */
  readonly Protocol: ProtocolType;
  /**
   * Subscription ARN
   */
  readonly SubscriptionArn: SnsSubscriptionArn;
  /**
   * Topic ARN
   */
  readonly TopicArn: SnsTopicArn;
}
