import { fromArray } from '@komore/reactive';

import { type SqsEvent } from './event/sqs-event';
import { type SqsEventRecord } from './event/sqs-event-record';

/**
 * Returns an observable stream of SQS event records
 *
 * @param sqsEvent SQS event
 * @returns Observable stream of SQS event records
 */
export function toSqsRecords(sqsEvent: SqsEvent): Observable<SqsEventRecord> {
  return fromArray(sqsEvent.Records);
}
