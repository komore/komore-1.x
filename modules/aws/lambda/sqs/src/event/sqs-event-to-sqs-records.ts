import { fromArray } from '@komore/reactive';

import { type SqsEventRecord } from './record/sqs-event-record';
import { type SqsEvent } from './sqs-event';

/**
 * Returns an observable stream of SQS event records
 *
 * @param sqsEvent SQS event
 * @returns Observable stream of SQS event records
 */
export function sqsEventToSqsRecords(sqsEvent: SqsEvent): Observable<SqsEventRecord> {
  return fromArray(sqsEvent.Records);
}
