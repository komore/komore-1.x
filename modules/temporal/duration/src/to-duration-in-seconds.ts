import { type Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDateTime } from '@komore/temporal';
import { buildRelativeTo } from './build-relative-to';

/**
 * Returns a duration in seconds
 * @param duration Duration
 * @param relativeTo Reference temporal
 * @returns Duration in seconds
 */
export function toDurationInSeconds(duration: Temporal.Duration, relativeTo?: TemporalWithDateTime): number {
  return duration.total({
    unit: 'second',
    relativeTo: buildRelativeTo(duration, relativeTo)
  });
}
