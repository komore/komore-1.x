import { type SqsEventRecord } from './record/sqs-event-record';

/**
 * SQS event
 */
export interface SqsEvent {
  /**
   * List of records
   */
  readonly Records: ReadonlyArray<SqsEventRecord>;
}
