import { Temporal } from '@js-temporal/polyfill';

/**
 * Gets the local time zone identifier
 * @returns Local time zone identifier
 */
export function getLocalTimeZoneId(): string {
  const timeZone = Temporal.Now.timeZone();
  return timeZone.id;
}
