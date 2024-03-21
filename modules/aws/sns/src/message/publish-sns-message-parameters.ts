import { type JsonString } from '@komore/json';
import { type ReadonlyRecord } from '@komore/typescript';

import { type SnsTopicArn } from '../topic/arn/sns-topic-arn';
import { type SnsMessageAttributeValue } from './attribute/sns-message-attribute-value';
import { type SnsMessageGroupId } from './group/sns-message-group-id';

/**
 * Publish SNS message parameters
 *
 * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_Publish.html#API_Publish_RequestParameters Publish Request Parameters}
 */
export interface PublishSnsMessageParameters {
  /**
   * Message
   */
  readonly Message: string | JsonString;
  /**
   * Message attributes
   */
  readonly MessageAttributes: ReadonlyRecord<string, SnsMessageAttributeValue>;
  /**
   * Message deduplication identifier
   *
   * @note Only applies to FIFO topics
   */
  readonly MessageDeduplicationId?: string;
  /**
   * Message group identifier
   *
   * @note Only applies to FIFO topics
   */
  readonly MessageGroupId?: SnsMessageGroupId;
  /**
   * Message structure
   */
  readonly MessageStructure?: 'json';
  /**
   * Phone number to which the message must be delivered
   */
  readonly PhoneNumber?: string; // TODO: typed? (E.164 format?)
  /**
   * Subject line when the message is delivered to an email endpoint
   */
  readonly Subject?: string;
  /**
   * Target ARN
   */
  readonly TargetArn?: string; // TODO: properly typed
  /**
   * Topic ARN
   */
  readonly TopicArn: SnsTopicArn;
}
