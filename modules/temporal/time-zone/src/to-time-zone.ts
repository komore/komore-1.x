import type { Temporal } from 'proposal-temporal';

/**
 * Returns the time zone used by the given zoned date time
 * @param zonedDateTime Zoned date time
 * @returns Time zone
 */
export function toTimeZone(zonedDateTime: Temporal.ZonedDateTime): Temporal.TimeZone {
  return zonedDateTime.timeZone;
}
