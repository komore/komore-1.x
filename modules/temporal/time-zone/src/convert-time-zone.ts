import { type Temporal } from '@js-temporal/polyfill';

/**
 * Converts a zoned date time to another time zone
 * @param zonedDateTime Zoned date time
 * @param timeZone Time zone
 * @returns Zoned date time with the different time zone
 */
export function convertTimeZone(
  zonedDateTime: Temporal.ZonedDateTime,
  timeZone: Temporal.TimeZone
): Temporal.ZonedDateTime {
  return zonedDateTime.withTimeZone(timeZone);
}
