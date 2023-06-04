import { Temporal } from '@js-temporal/polyfill';

/**
 * Gets the local time zone
 * @returns Local time zone
 */
export function getLocalTimeZone(): Temporal.TimeZone {
  const timeZoneId = Temporal.Now.timeZoneId();
  return new Temporal.TimeZone(timeZoneId);
}
