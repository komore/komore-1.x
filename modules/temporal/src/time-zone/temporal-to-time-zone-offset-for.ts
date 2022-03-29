import { Temporal } from '@js-temporal/polyfill';

/**
 * Creates a function that returns a time zone offset for a specific time zone, given a temporal or instant
 * @param timeZone Time zone
 * @returns Function that returns a time zone offset for the specified time zone, given a temporal or instant
 */
export function temporalToTimeZoneOffsetFor(
  timeZone: Temporal.TimeZone
): (temporal: Temporal.ZonedDateTime | Temporal.Instant) => number {
  return temporal => {
    const instant = temporal instanceof Temporal.Instant ? temporal : temporal.toInstant();
    return timeZone.getOffsetNanosecondsFor(instant);
  };
}
