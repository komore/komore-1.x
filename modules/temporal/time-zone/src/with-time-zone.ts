import type { Temporal } from 'proposal-temporal';

/**
 * Creates a function that converts a zoned date time to another time zone
 * @param timeZone Time zone
 * @returns Function that converts a zoned date time to another time zone
 */
export function withTimeZone(
  timeZone: Temporal.TimeZone
): (zonedDateTime: Temporal.ZonedDateTime) => Temporal.ZonedDateTime {
  return zonedDateTime => zonedDateTime.withTimeZone(timeZone);
}
