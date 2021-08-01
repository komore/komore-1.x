import type { TemporalWithDateTime } from '../temporal-with-date-time';
import { isEarlier } from './is-earlier';

/**
 * Finds the earliest temporal with date and time index within a list
 * @param temporals List of temporals with date and time
 * @returns Earliest temporal index, or `-1` if the list is empty
 */
export function findEarliestDateTimeIndex<T extends TemporalWithDateTime>(temporals: ReadonlyArray<T>): number {
  // PERF: test optimizing by reducing indexed array access for prev
  return temporals.reduce(
    (prev, curr, index, array) => (prev === -1 || isEarlier(curr, array[prev]) ? index : prev),
    -1
  );
}
