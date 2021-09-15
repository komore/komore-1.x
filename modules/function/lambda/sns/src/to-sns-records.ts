import type { Observable } from '@komore/reactive';
import { fromArray } from '@komore/reactive';
import type { SnsEvent } from './event/sns-event';
import type { SnsEventRecord } from './event/sns-event-record';

/**
 * Returns an observable stream of SNS event records
 * @param snsEvent SNS event
 * @returns Observable stream of SNS event records
 */
export function toSnsRecords(snsEvent: SnsEvent): Observable<SnsEventRecord> {
  return fromArray(snsEvent.Records);
}
