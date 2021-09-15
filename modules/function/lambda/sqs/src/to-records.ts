import type { SqsEvent, SqsEventRecord } from '@komore/function-lambda/sqs';
import type { Observable } from '@komore/reactive';
import { fromArray } from '@komore/reactive';

/**
 * Returns an observable stream of SQS event records
 * @param sqsEvent SQS event
 * @returns Observable stream of SQS event records
 */
export function toRecords(sqsEvent: SqsEvent): Observable<SqsEventRecord> {
  return fromArray(sqsEvent.Records);
}
