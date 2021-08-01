import type { TemporalWithTime } from '../temporal-with-time';

interface TimeDuration {
  readonly hours: number;
  readonly microseconds: number;
  readonly milliseconds: number;
  readonly minutes: number;
  readonly nanoseconds: number;
  readonly seconds: number;
}

export function addTime(durationLike: Partial<TimeDuration>): <T extends TemporalWithTime>(temporal: T) => T {
  return <T extends TemporalWithTime>(temporal: T) => temporal.add(durationLike) as T;
}
