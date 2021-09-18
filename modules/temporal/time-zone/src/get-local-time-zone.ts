import { Temporal } from '@js-temporal/polyfill';

/**
 * Gets the local time zone
 * @returns Local time zone
 */
export function getLocalTimeZone(): Temporal.TimeZone {
  return Temporal.Now.timeZone();
}
