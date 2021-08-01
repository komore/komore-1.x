import type { Temporal } from '@js-temporal/polyfill';

/**
 * Gets a time zone offset at a given instant
 * @param timeZone Time zone
 * @param instant Instant
 * @returns Time zone offset in nanoseconds
 */
export function getTimeZoneOffset(timeZone: Temporal.TimeZone, instant: Temporal.Instant): number {
  return timeZone.getOffsetNanosecondsFor(instant);
}
