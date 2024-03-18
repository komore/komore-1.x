import { type Base64String } from '@komore/string';

/**
 * SQS message binary attribute value
 *
 * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_MessageAttributeValue.html MessageAttributeValue}
 */
export interface SqsMessageBinaryAttributeValue {
  /**
   * Data type
   */
  readonly DataType: 'Binary';
  /**
   * String value
   */
  readonly BinaryValue: Base64String;
}
