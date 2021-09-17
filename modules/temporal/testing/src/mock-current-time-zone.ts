import { Temporal } from '@js-temporal/polyfill';

/**
 * Mocks the current time zone
 * @param timeZone Time zone
 * @returns Function that clears the mock when called
 */
export function mockCurrentTimeZone(timeZone: Temporal.TimeZone): () => void {
  const previousTimeZone = Temporal.Now.timeZone;
  Temporal.Now.timeZone = () => timeZone;
  return () => (Temporal.Now.timeZone = previousTimeZone);
}
