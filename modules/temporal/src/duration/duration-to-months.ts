import { type Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDateTime } from '@komore/temporal';
import { buildRelativeToDuration } from './build-relative-to-duration';

/**
 * Returns a duration in months
 * @param relativeTo Reference temporal
 * @returns Duration in months
 */
export function durationToMonths(relativeTo?: TemporalWithDateTime): (duration: Temporal.Duration) => number {
  return duration =>
    duration.total({
      unit: 'month',
      relativeTo: buildRelativeToDuration(duration, relativeTo),
    });
}
