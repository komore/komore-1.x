/**
 * SQS event record message string attribute
 */
export interface SqsEventRecordMessageStringAttribute {
  /**
   * Data type
   */
  readonly dataType: 'String';
  /**
   * String value
   */
  readonly stringValue: string;
}
