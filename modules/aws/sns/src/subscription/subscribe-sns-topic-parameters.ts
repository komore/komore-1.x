import { type ReadonlyRecord } from '@komore/typescript';

import { type SnsTopicArn } from '../topic/arn/sns-topic-arn';
import { type SnsSubscriptionEndpointByProtocol } from './protocol/sns-subscription-endpoint-by-protocol';

/**
 * Subscribe SNS topic parameters
 *
 * @template ProtocolType Protocol type
 * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html#API_Subscribe_RequestParameters Subscribe Request Parameters}
 */
export interface SubscribeSnsTopicParameters<
  ProtocolType extends keyof SnsSubscriptionEndpointByProtocol = keyof SnsSubscriptionEndpointByProtocol,
> {
  /**
   * Attributes
   */
  readonly Attributes: ReadonlyRecord<string, string>; // TODO: better types?
  /**
   * Endpoint that will receive notifications
   */
  readonly Endpoint: SnsSubscriptionEndpointByProtocol[ProtocolType];
  /**
   * Subscription protocol
   */
  readonly Protocol: ProtocolType;
  /**
   * Always return a subscription ARN, even for pending subscriptions
   */
  readonly ReturnSubscriptionArn?: boolean;
  /**
   * Topic ARN
   */
  readonly TopicArn: SnsTopicArn;
}
