import { type Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDateTime } from '@komore/temporal';
import { buildDurationTotalOfRelativeToReference } from './build-duration-total-of-relative-to-reference';

/**
 * Creates a function that returns a duration in years
 *
 * @param relativeTo Reference temporal
 * @returns Function that returns a duration in years
 */
export function durationToYears(relativeTo?: TemporalWithDateTime): (duration: Temporal.Duration) => number {
  return duration => duration.total(buildDurationTotalOfRelativeToReference(duration, 'year', relativeTo));
}
