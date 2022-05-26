import { type Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDateTime } from '@komore/temporal';
import { buildDurationTotalOfRelativeToReference } from './build-duration-total-of-relative-to-reference';

/**
 * Creates a function that returns a duration in milliseconds
 *
 * @param relativeTo Reference temporal
 * @returns Function that returns a duration in milliseconds
 */
export function durationToMilliseconds(relativeTo?: TemporalWithDateTime): (duration: Temporal.Duration) => number {
  return duration => duration.total(buildDurationTotalOfRelativeToReference(duration, 'millisecond', relativeTo));
}
