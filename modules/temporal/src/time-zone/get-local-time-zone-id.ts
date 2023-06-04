import { Temporal } from '@js-temporal/polyfill';

/**
 * Returns the local time zone identifier
 *
 * @returns Local time zone identifier
 */
export function getLocalTimeZoneId(): string {
  return Temporal.Now.timeZoneId();
}
