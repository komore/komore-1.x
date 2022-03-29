import { type Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDateTime } from '@komore/temporal';
import { buildRelativeToDuration } from './build-relative-to-duration';

/**
 * Creates a function that returns a duration in hours
 * @param relativeTo Reference temporal
 * @returns Function that returns a duration in hours
 */
export function durationToHours(relativeTo?: TemporalWithDateTime): (duration: Temporal.Duration) => number {
  return duration =>
    duration.total({
      unit: 'hour',
      relativeTo: buildRelativeToDuration(duration, relativeTo),
    });
}
