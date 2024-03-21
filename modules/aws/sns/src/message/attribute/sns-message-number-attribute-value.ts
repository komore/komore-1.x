/**
 * SNS message number attribute value
 *
 * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_MessageAttributeValue.html MessageAttributeValue}
 */
export interface SnsMessageNumberAttributeValue {
  /**
   * Data type
   */
  readonly DataType: 'Number';
  /**
   * String value
   */
  readonly StringValue: `${number}`;
}
