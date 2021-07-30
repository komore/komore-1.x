import { createDuration } from '../duration/create-duration';
import type { Duration } from '../duration/duration';
import type { TemporalWithTime } from './temporal-with-time';

export function getTimeDifference(lhs: TemporalWithTime, rhs: TemporalWithTime): Duration {
  return createDuration(rhs._.getTime() - lhs._.getTime());
}
