import { Temporal } from '@js-temporal/polyfill';
import type { TemporalWithDateTime } from '@komore/temporal';

/**
 * Returns a duration in years
 * @param duration Duration
 * @param relativeTo Reference temporal, or now if undefined
 * @returns Duration in years
 */
export function toDurationInYears(duration: Temporal.Duration, relativeTo?: TemporalWithDateTime): number {
  return duration.total({
    unit: 'year',
    relativeTo: relativeTo ?? Temporal.Now.plainDateTimeISO()
  });
}
