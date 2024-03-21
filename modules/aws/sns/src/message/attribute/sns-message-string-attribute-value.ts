/**
 * SNS message string attribute value
 *
 * @see {@link https://docs.aws.amazon.com/sns/latest/api/API_MessageAttributeValue.html MessageAttributeValue}
 */
export interface SnsMessageStringAttributeValue {
  /**
   * Data type
   */
  readonly DataType: 'Number' | 'String' | 'String.Array';
  /**
   * String value
   */
  readonly StringValue: string;
}
