import { Temporal } from '@js-temporal/polyfill';
import { Observable } from '@komore/reactive';

/**
 * Mocks the current zoned date time
 * @param zonedDateTime Zoned date time
 */
export function mockCurrentZonedDateTime(zonedDateTime: Temporal.ZonedDateTime): Observable<void> {
  return new Observable<void>(subscriber => {
    const previousZonedDateTimeISO = Temporal.Now.zonedDateTimeISO;
    Temporal.Now.zonedDateTimeISO = () => zonedDateTime;
    subscriber.add(() => (Temporal.Now.zonedDateTimeISO = previousZonedDateTimeISO));
  });
}
