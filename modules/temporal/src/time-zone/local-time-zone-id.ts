/**
 * Returns the local time zone identifier
 *
 * @returns Local time zone identifier
 */
export function localTimeZoneId(): string {
  return Temporal.Now.timeZoneId();
}
