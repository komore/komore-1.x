import { fromArray } from '@komore/reactive';

import { type SnsEvent } from './event/sns-event';
import { type SnsEventRecord } from './event/sns-event-record';

/**
 * Returns an observable stream of SNS event records, given an SNS event
 *
 * @param snsEvent SNS event
 * @returns Observable stream of SNS event records, given an SNS event
 */
export function snsEventToSnsEventRecords(snsEvent: SnsEvent): Observable<SnsEventRecord> {
  return fromArray(snsEvent.Records);
}
