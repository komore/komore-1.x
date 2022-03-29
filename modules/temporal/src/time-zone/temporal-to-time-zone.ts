import { type Temporal } from '@js-temporal/polyfill';

/**
 * Returns the time zone used by the given zoned date time
 * @param zonedDateTime Zoned date time
 * @returns Time zone
 */
export function temporalToTimeZone(zonedDateTime: Temporal.ZonedDateTime): Temporal.TimeZone {
  // TODO: avoid cast
  return zonedDateTime.timeZone as Temporal.TimeZone;
}
