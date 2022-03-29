import { type TemporalWithTime } from '../temporal-with-time';

interface TimeDuration {
  readonly hours: number;
  readonly microseconds: number;
  readonly milliseconds: number;
  readonly minutes: number;
  readonly nanoseconds: number;
  readonly seconds: number;
}

/**
 * Creates a function that adds time to a temporal
 * @param durationLike Duration like
 * @returns Temporal with the added time
 */
export function addTime(durationLike: Partial<TimeDuration>): <T extends TemporalWithTime>(temporal: T) => T {
  return <T extends TemporalWithTime>(temporal: T) => temporal.add(durationLike) as T;
}
