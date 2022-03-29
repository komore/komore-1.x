import { Temporal } from '@js-temporal/polyfill';

/**
 * Creates a function that returns a time zone's offset at a reference temporal or instant
 * @param referenceInstant Reference instant
 * @returns Function that returns a time zone's offset at the reference temporal or instant
 */
export function timeZoneToTimeZoneOffsetAt(
  reference: Temporal.ZonedDateTime | Temporal.Instant
): (timeZone: Temporal.TimeZone) => number {
  const referenceInstant = reference instanceof Temporal.Instant ? reference : reference.toInstant();
  return timeZone => timeZone.getOffsetNanosecondsFor(referenceInstant);
}
