/**
 * SQS event record message string list attribute
 */
export interface SqsEventRecordMessageStringListAttribute {
  /**
   * Data type
   */
  readonly dataType: 'StringList';
  /**
   * String value
   */
  readonly stringListValues: ReadonlyArray<string>;
}
