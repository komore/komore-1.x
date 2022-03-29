import { type Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDateTime } from '@komore/temporal';
import { buildRelativeToDuration } from './build-relative-to-duration';

/**
 * Creates a function that returns a duration in years
 * @param relativeTo Reference temporal
 * @returns Function that returns a duration in years
 */
export function durationToYears(relativeTo?: TemporalWithDateTime): (duration: Temporal.Duration) => number {
  return duration =>
    duration.total({
      unit: 'year',
      relativeTo: buildRelativeToDuration(duration, relativeTo),
    });
}
