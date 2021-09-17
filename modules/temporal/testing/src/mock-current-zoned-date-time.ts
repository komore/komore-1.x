import { Temporal } from '@js-temporal/polyfill';

/**
 * Mocks the current zoned date time
 * @param zonedDateTime Zoned date time
 * @returns Function that clears the mock when called
 */
export function mockCurrentZonedDateTime(zonedDateTime: Temporal.ZonedDateTime): () => void {
  const previousZonedDateTimeISO = Temporal.Now.zonedDateTimeISO;
  Temporal.Now.zonedDateTimeISO = () => zonedDateTime;
  return () => (Temporal.Now.zonedDateTimeISO = previousZonedDateTimeISO);
}
