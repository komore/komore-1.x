import { Temporal } from '@js-temporal/polyfill';

/**
 * Mocks the current zoned date time
 * @param zonedDateTime Zoned date time
 * @returns Function that clears the mock when called
 */
export function mockCurrentZonedDateTime(zonedDateTime: Temporal.ZonedDateTime): () => void {
  const previousZonedDateTimeISO = Temporal.now.zonedDateTimeISO;
  Temporal.now.zonedDateTimeISO = () => zonedDateTime;
  return () => (Temporal.now.zonedDateTimeISO = previousZonedDateTimeISO);
}
