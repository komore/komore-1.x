/**
 * Returns the time zone identifier used by the given time zone
 *
 * @param timeZone Time zone
 * @returns Time zone identifier
 */
export function timeZoneToTimeZoneId(timeZone: Temporal.TimeZone): string {
  return timeZone.id;
}
