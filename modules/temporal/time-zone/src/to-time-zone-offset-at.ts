import type { Temporal } from '@js-temporal/polyfill';

/**
 * Creates a function that returns a time zone's offset at a reference instant
 * @param referenceInstant Reference instant
 * @returns Function that returns a time zone's offset at the reference instant
 */
export function toTimeZoneOffsetAt(referenceInstant: Temporal.Instant): (timeZone: Temporal.TimeZone) => number {
  return timeZone => timeZone.getOffsetNanosecondsFor(referenceInstant);
}
