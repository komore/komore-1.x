/**
 * SNS message string array attribute value
 *
 * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_MessageAttributeValue.html MessageAttributeValue}
 */
export interface SnsMessageStringArrayAttributeValue {
  /**
   * Data type
   */
  readonly DataType: 'String.Array';
  /**
   * String value
   */
  readonly StringValue: string;
}
