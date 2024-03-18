/**
 * SQS message string attribute value
 *
 * @see {@link https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_MessageAttributeValue.html MessageAttributeValue}
 */
export interface SqsMessageStringAttributeValue {
  /**
   * Data type
   */
  readonly DataType: 'String';
  /**
   * String value
   */
  readonly StringValue: string;
}
