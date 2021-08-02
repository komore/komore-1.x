import { Temporal } from '@js-temporal/polyfill';
import type { TemporalWithDateTime } from '@komore/temporal';

/**
 * Builds a relative to reference point when necessary
 * @param duration Duration
 * @param relativeTo User-defined reference point
 * @returns Relative to reference point
 */
export function buildRelativeTo(
  duration: Temporal.Duration,
  relativeTo?: TemporalWithDateTime
): TemporalWithDateTime | undefined {
  if (relativeTo !== undefined) {
    return relativeTo;
  }

  if (duration.weeks !== 0 || duration.months !== 0 || duration.years !== 0) {
    return Temporal.now.plainDateTimeISO();
  }
}
