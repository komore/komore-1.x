import { Temporal } from '@js-temporal/polyfill';
import type { TemporalWithDateTime } from '@komore/temporal';

/**
 * Creates a function that returns a duration in minutes relative to a reference temporal
 * @param relativeTo Reference temporal
 * @returns Function that returns a duration in minutes relative to the reference temporal
 */
export function toDurationInMinutesRelativeTo(
  relativeTo: TemporalWithDateTime
): (duration: Temporal.Duration) => number {
  return duration =>
    duration.total({
      unit: 'minute',
      relativeTo
    });
}
