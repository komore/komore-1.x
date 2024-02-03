/**
 * Returns the local time zone
 *
 * @returns Local time zone
 */
export function localTimeZone(): Temporal.TimeZone {
  const timeZoneId = Temporal.Now.timeZoneId();
  return new Temporal.TimeZone(timeZoneId);
}
