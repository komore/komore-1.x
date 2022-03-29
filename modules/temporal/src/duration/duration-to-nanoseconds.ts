import { type Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDateTime } from '@komore/temporal';
import { buildRelativeToDuration } from './build-relative-to-duration';

/**
 * Creates a function that returns a duration in nanoseconds
 * @param relativeTo Reference temporal
 * @returns Function that returns a duration in nanoseconds
 */
export function durationToNanoseconds(relativeTo?: TemporalWithDateTime): (duration: Temporal.Duration) => number {
  return duration =>
    duration.total({
      unit: 'nanosecond',
      relativeTo: buildRelativeToDuration(duration, relativeTo),
    });
}
