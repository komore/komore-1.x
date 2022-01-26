import { Temporal } from '@js-temporal/polyfill';
import { Observable } from '@komore/reactive';

/**
 * Mocks the current time zone
 * @param timeZone Time zone
 */
export function mockCurrentTimeZone(timeZone: Temporal.TimeZone): Observable<void> {
  return new Observable<void>(subscriber => {
    const previousTimeZone = Temporal.Now.timeZone;
    Temporal.Now.timeZone = () => timeZone;
    subscriber.add(() => (Temporal.Now.timeZone = previousTimeZone));
  });
}
