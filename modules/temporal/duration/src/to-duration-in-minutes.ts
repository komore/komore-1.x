import { type Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDateTime } from '@komore/temporal';
import { buildRelativeTo } from './build-relative-to';

/**
 * Returns a duration in minutes
 * @param duration Duration
 * @param relativeTo Reference temporal
 * @returns Duration in minutes
 */
export function toDurationInMinutes(duration: Temporal.Duration, relativeTo?: TemporalWithDateTime): number {
  return duration.total({
    unit: 'minute',
    relativeTo: buildRelativeTo(duration, relativeTo)
  });
}
