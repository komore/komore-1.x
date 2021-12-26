import { type SqsEventRecordMessageAttributeDataType } from './sqs-event-record-message-attribute-data-type';

/**
 * SQS event record message attribute
 */
export interface SqsEventRecordMessageAttribute {
  readonly binaryValue?: string;
  readonly dataType: SqsEventRecordMessageAttributeDataType;
  readonly stringValue?: string;
}
