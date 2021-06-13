import type { SqsEventRecord } from './sqs-event-record';

/**
 * SQS event
 */
export interface SqsEvent {
  readonly Records: ReadonlyArray<SqsEventRecord>;
}
