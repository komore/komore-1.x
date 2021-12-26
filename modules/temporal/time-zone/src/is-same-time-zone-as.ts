import { type Temporal } from '@js-temporal/polyfill';

/**
 * Creates a function that tests whether a time zone is identical to a reference time zone
 * @param referenceTimeZone Reference time zone
 * @returns Function that tests whether a time zone is identical to the reference time zone
 */
export function isSameTimeZoneAs(referenceTimeZone: Temporal.TimeZone): (timeZone: Temporal.TimeZone) => boolean {
  return timeZone => timeZone.id === referenceTimeZone.id;
}
