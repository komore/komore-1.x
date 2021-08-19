import type { Temporal } from '@js-temporal/polyfill';
import type { TemporalWithDateTime } from '@komore/temporal';
import { buildRelativeTo } from './build-relative-to';

/**
 * Returns a duration in days
 * @param duration Duration
 * @param relativeTo Reference temporal
 * @returns Duration in days
 */
export function toDurationInDays(duration: Temporal.Duration, relativeTo?: TemporalWithDateTime): number {
  return duration.total({
    unit: 'minute',
    relativeTo: buildRelativeTo(duration, relativeTo)
  });
}
