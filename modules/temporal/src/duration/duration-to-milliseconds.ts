import { type Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDateTime } from '@komore/temporal';
import { buildRelativeToDuration } from './build-relative-to-duration';

/**
 * Creates a function that returns a duration in milliseconds
 * @param relativeTo Reference temporal
 * @returns Function that returns a duration in milliseconds
 */
export function durationToMilliseconds(relativeTo?: TemporalWithDateTime): (duration: Temporal.Duration) => number {
  return duration =>
    duration.total({
      unit: 'millisecond',
      relativeTo: buildRelativeToDuration(duration, relativeTo),
    });
}
