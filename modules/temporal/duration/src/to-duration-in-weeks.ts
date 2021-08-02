import { Temporal } from '@js-temporal/polyfill';
import type { TemporalWithDateTime } from '@komore/temporal';

/**
 * Returns a duration in months
 * @param duration Duration
 * @param relativeTo Reference temporal, or now if undefined
 * @returns Duration in months
 */
export function toDurationInWeeks(duration: Temporal.Duration, relativeTo?: TemporalWithDateTime): number {
  return duration.total({
    unit: 'week',
    relativeTo: relativeTo ?? Temporal.now.plainDateTimeISO()
  });
}
