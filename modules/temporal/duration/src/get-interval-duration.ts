import type { Interval } from '../interval/interval';
import type { Temporal } from '../temporal';
import type { Duration } from './duration';
import { getDurationBetween } from './get-duration-between';

export function getIntervalDuration(interval: Interval<Temporal>): Duration {
  const { start, end } = interval;
  return getDurationBetween(start, end);
}
