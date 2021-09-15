import type { Observable } from '@komore/reactive';
import { fromArray } from '@komore/reactive';
import type { SesEvent } from './event/ses-event';
import type { SesEventRecord } from './event/ses-event-record';

/**
 * Returns an observable stream of SES event records
 * @param sesEvent SES event
 * @returns Observable stream of SES event records
 */
export function toSesRecords(sesEvent: SesEvent): Observable<SesEventRecord> {
  return fromArray(sesEvent.Records);
}
