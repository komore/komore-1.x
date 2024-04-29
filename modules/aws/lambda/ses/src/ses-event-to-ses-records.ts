import { fromArray } from '@komore/reactive';

import { type SesEvent } from './event/ses-event';
import { type SesEventRecord } from './event/ses-event-record';

/**
 * Returns an observable stream of SES event records, given an SES event
 *
 * @param sesEvent SES event
 * @returns Observable stream of SES event records
 */
export function sesEventToSesRecords(sesEvent: SesEvent): Observable<SesEventRecord> {
  return fromArray(sesEvent.Records);
}
