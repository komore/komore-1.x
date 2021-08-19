import type { Temporal } from '@js-temporal/polyfill';
import type { TemporalWithDateTime } from '@komore/temporal';
import { buildRelativeTo } from './build-relative-to';

/**
 * Returns a duration in hours
 * @param duration Duration
 * @param relativeTo Reference temporal
 * @returns Duration in hours
 */
export function toDurationInHours(duration: Temporal.Duration, relativeTo?: TemporalWithDateTime): number {
  return duration.total({
    unit: 'hour',
    relativeTo: buildRelativeTo(duration, relativeTo)
  });
}
