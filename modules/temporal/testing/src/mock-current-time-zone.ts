import { Temporal } from '@js-temporal/polyfill';

/**
 * Mocks the current time zone
 * @param timeZone Time zone
 * @returns Function that clears the mock when called
 */
 export function mockCurrentTimeZone(timeZone: Temporal.TimeZone): () => void {
  const previousTimeZone = Temporal.now.timeZone;
  Temporal.now.timeZone = () => timeZone;
  return () => (Temporal.now.timeZone = previousTimeZone);
}
