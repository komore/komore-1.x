import { type Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDateTime } from '@komore/temporal';
import { buildRelativeToDuration } from './build-relative-to-duration';

/**
 * Creates a functon that returns a duration in days
 * @param relativeTo Reference temporal
 * @returns Function that returns a duration in days
 */
export function durationToDays(relativeTo?: TemporalWithDateTime): (duration: Temporal.Duration) => number {
  return duration =>
    duration.total({
      unit: 'day',
      relativeTo: buildRelativeToDuration(duration, relativeTo),
    });
}
