/**
 * Returns an instant, given a date time string
 *
 * @param dateTime Date time string
 * @returns Instant
 * @private
 */
export function dateTimeStringToInstant(dateTime: string): Temporal.Instant {
  return Temporal.Instant.from(dateTime.length > 19 ? dateTime : `${dateTime}Z`);
}
