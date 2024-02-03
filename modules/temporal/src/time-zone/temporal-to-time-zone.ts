/**
 * Returns the time zone used by the given zoned date time
 *
 * @param zonedDateTime Zoned date time
 * @returns Time zone
 */
export function temporalToTimeZone(zonedDateTime: Temporal.ZonedDateTime): Temporal.TimeZone {
  return new Temporal.TimeZone(zonedDateTime.timeZoneId);
}
