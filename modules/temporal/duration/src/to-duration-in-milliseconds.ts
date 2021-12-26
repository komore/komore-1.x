import { type Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDateTime } from '@komore/temporal';
import { buildRelativeTo } from './build-relative-to';

/**
 * Returns a duration in milliseconds
 * @param duration Duration
 * @param relativeTo Reference temporal
 * @returns Duration in milliseconds
 */
export function toDurationInMilliseconds(duration: Temporal.Duration, relativeTo?: TemporalWithDateTime): number {
  return duration.total({
    unit: 'millisecond',
    relativeTo: buildRelativeTo(duration, relativeTo)
  });
}
