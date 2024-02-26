/**
 * SQS event record message binary attribute
 */
export interface SqsEventRecordMessageBinaryAttribute {
  /**
   * Binary value
   */
  readonly binaryValue: string; // TODO: check it is really a string
  /**
   * Data type
   */
  readonly dataType: 'Binary';
}
