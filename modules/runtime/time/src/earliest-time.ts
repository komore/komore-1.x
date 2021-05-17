import type { Temporal } from './temporal';
import type { LocalTime } from './local-time';

/**
 * Selects the earliest time
 * @param temporals Temporals
 */
export function earliestTime(temporals: ReadonlyArray<Temporal>): OffsetTime {
  const timestamps = temporals.map(({ _ }) => _.getTime());
  Math.min(temporals.map());
}
