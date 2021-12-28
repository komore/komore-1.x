import { type Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDateTime } from '@komore/temporal';

/**
 * Creates a function that returns a duration in months relative to a reference temporal
 * @param relativeTo Reference temporal
 * @returns Function that returns a duration in months relative to the reference temporal
 */
export function toDurationInMonthsRelativeTo(
  relativeTo: TemporalWithDateTime
): (duration: Temporal.Duration) => number {
  return duration =>
    duration.total({
      unit: 'month',
      relativeTo
    });
}
