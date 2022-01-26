import { Temporal } from '@js-temporal/polyfill';
import { Observable } from '@komore/reactive';

/**
 * Mocks the current plain date
 * @param plainDate Plain date
 */
export function mockCurrentPlainDate(plainDate: Temporal.PlainDate): Observable<void> {
  return new Observable<void>(subscriber => {
    const previousPlainDateISO = Temporal.Now.plainDateISO;
    Temporal.Now.plainDateISO = () => plainDate;
    subscriber.add(() => (Temporal.Now.plainDateISO = previousPlainDateISO));
  });
}
