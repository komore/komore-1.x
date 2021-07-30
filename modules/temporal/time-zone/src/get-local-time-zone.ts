import { Temporal } from 'proposal-temporal';

/**
 * Gets the local time zone
 * @returns Local time zone
 */
export function getLocalTimeZone(): Temporal.TimeZone {
  return Temporal.now.timeZone();
}
