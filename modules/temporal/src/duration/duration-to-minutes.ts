import { type TemporalWithDateTime } from '@komore/temporal';
import { buildDurationTotalOfRelativeToReference } from './build-duration-total-of-relative-to-reference';

/**
 * Creates a function that returns a duration in minutes
 *
 * @param relativeTo Reference temporal
 * @returns Function that returns a duration in minutes
 */
export function durationToMinutes(relativeTo?: TemporalWithDateTime): (duration: Temporal.Duration) => number {
  return duration => duration.total(buildDurationTotalOfRelativeToReference(duration, 'minute', relativeTo));
}
