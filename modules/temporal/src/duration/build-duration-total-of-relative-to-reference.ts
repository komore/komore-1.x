import { type TemporalWithDateTime } from '@komore/temporal';

/**
 * Builds a total of relative to a reference point when necessary
 *
 * @param duration Duration
 * @param unit Unit
 * @param relativeTo User-defined reference point
 * @returns Value with a relative to reference point
 */
export function buildDurationTotalOfRelativeToReference(
  duration: Temporal.Duration,
  unit: Temporal.TotalUnit<Temporal.DateTimeUnit>,
  relativeTo?: TemporalWithDateTime
): Temporal.DurationTotalOf {
  if (relativeTo !== undefined) {
    return {
      unit,
      relativeTo,
    };
  }

  if (duration.days !== 0 || duration.weeks !== 0 || duration.months !== 0 || duration.years !== 0) {
    return {
      unit,
      relativeTo: Temporal.Now.plainDateTimeISO(),
    };
  }

  return {
    unit,
  };
}
