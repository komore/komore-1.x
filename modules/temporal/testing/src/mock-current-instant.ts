import { Temporal } from '@js-temporal/polyfill';
import { Observable } from '@komore/reactive';

/**
 * Mocks the current instant
 * @param instant Instant
 */
export function mockCurrentInstant(instant: Temporal.Instant): Observable<void> {
  return new Observable<void>(subscriber => {
    const previousInstant = Temporal.Now.instant;
    Temporal.Now.instant = () => instant;
    subscriber.add(() => (Temporal.Now.instant = previousInstant));
  });
}
