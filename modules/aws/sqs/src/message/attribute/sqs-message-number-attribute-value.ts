/**
 * SQS message number attribute value
 *
 * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_MessageAttributeValue.html MessageAttributeValue}
 */
export interface SqsMessageNumberAttributeValue {
  /**
   * Data type
   */
  readonly DataType: 'Number';
  /**
   * String value
   */
  readonly StringValue: `${number}`;
}
