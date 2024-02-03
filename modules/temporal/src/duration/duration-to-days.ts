import { type TemporalWithDateTime } from '@komore/temporal';

import { buildDurationTotalOfRelativeToReference } from './build-duration-total-of-relative-to-reference';

/**
 * Creates a functon that returns a duration in days
 *
 * @param relativeTo Reference temporal
 * @returns Function that returns a duration in days
 */
export function durationToDays(relativeTo?: TemporalWithDateTime): (duration: Temporal.Duration) => number {
  return duration => duration.total(buildDurationTotalOfRelativeToReference(duration, 'day', relativeTo));
}
