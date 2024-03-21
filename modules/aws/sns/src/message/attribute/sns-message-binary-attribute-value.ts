import { type Base64String } from '@komore/string';

/**
 * SNS message binary attribute value
 *
 * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_MessageAttributeValue.html MessageAttributeValue}
 */
export interface SnsMessageBinaryAttributeValue {
  /**
   * Data type
   */
  readonly DataType: 'Binary';
  /**
   * Binary value
   */
  readonly BinaryValue: Base64String;
}
