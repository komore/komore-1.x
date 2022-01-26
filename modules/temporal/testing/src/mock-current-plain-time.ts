import { Temporal } from '@js-temporal/polyfill';
import { Observable } from '@komore/reactive';

/**
 * Mocks the current plain time
 * @param plainTime Plain time
 */
export function mockCurrentPlainTime(plainTime: Temporal.PlainTime): Observable<void> {
  return new Observable<void>(subscriber => {
    const previousPlainTimeISO = Temporal.Now.plainTimeISO;
    Temporal.Now.plainTimeISO = () => plainTime;
    subscriber.add(() => (Temporal.Now.plainTimeISO = previousPlainTimeISO));
  });
}
