import { type Temporal } from '@js-temporal/polyfill';

/**
 * Creates a function that converts a zoned date time to another time zone
 * @param timeZone Time zone
 * @returns Function that converts a zoned date time to another time zone
 */
export function temporalWithTimeZone(
  timeZone: Temporal.TimeZone
): (zonedDateTime: Temporal.ZonedDateTime) => Temporal.ZonedDateTime {
  return zonedDateTime => zonedDateTime.withTimeZone(timeZone);
}
