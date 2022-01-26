import { Temporal } from '@js-temporal/polyfill';
import { Observable } from '@komore/reactive';

/**
 * Mocks the current plain date time
 * @param plainDateTime Plain date time
 */
export function mockCurrentPlainDateTime(plainDateTime: Temporal.PlainDateTime): Observable<void> {
  return new Observable<void>(subscriber => {
    const previousPlainDateTimeISO = Temporal.Now.plainDateTimeISO;
    Temporal.Now.plainDateTimeISO = () => plainDateTime;
    subscriber.add(() => (Temporal.Now.plainDateTimeISO = previousPlainDateTimeISO));
  });
}
