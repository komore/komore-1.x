/**
 * Returns the time zone identifier used by the given zoned date time
 *
 * @param zonedDateTime Zoned date time
 * @returns Time zone identifier
 */
export function temporalToTimeZoneId(zonedDateTime: Temporal.ZonedDateTime): string {
  return zonedDateTime.timeZoneId;
}
