import type { Temporal } from 'proposal-temporal';

export function toTimeZoneOffsetWith(timeZone: Temporal.TimeZone): (instant: Temporal.Instant) => number {
  return instant => timeZone.getOffsetNanosecondsFor(instant);
}
