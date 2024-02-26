import { type SqsEventRecordMessageBinaryAttribute } from './sqs-event-record-message-binary-attribute';
import { type SqsEventRecordMessageStringAttribute } from './sqs-event-record-message-string-attribute';
import { type SqsEventRecordMessageStringListAttribute } from './sqs-event-record-message-string-list-attribute';

/**
 * SQS event record message attribute
 */
export type SqsEventRecordMessageAttribute =
  | SqsEventRecordMessageBinaryAttribute
  | SqsEventRecordMessageStringAttribute
  | SqsEventRecordMessageStringListAttribute;
