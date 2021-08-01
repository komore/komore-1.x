import type { Temporal } from '@js-temporal/polyfill';

export function toTimeZoneOffsetWith(timeZone: Temporal.TimeZone): (instant: Temporal.Instant) => number {
  return instant => timeZone.getOffsetNanosecondsFor(instant);
}
