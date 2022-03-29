import { type Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDateTime } from '@komore/temporal';
import { buildRelativeToDuration } from './build-relative-to-duration';

/**
 * Creates a function that returns a duration in weeks
 * @param relativeTo Reference temporal
 * @returns Function that returns a duration in weeks
 */
export function durationToWeeks(relativeTo?: TemporalWithDateTime): (duration: Temporal.Duration) => number {
  return duration =>
    duration.total({
      unit: 'week',
      relativeTo: buildRelativeToDuration(duration, relativeTo),
    });
}
