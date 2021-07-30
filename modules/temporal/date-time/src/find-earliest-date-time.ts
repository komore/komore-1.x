import { isEarlierDateTime } from './is-earlier-date-time';
import type { TemporalWithDateTime } from './temporal-with-date-time';

/**
 * Finds the earliest date time within a list of temporals
 * @param temporals List of temporals
 * @returns Earliest date time, or `undefined` if the list is empty
 */
export function findEarliestDateTime<T extends TemporalWithDateTime>(temporals: ReadonlyArray<T>): T | undefined {
  return temporals.reduce(
    (prev, curr) => (prev === undefined || isEarlierDateTime(curr, prev) ? curr : prev),
    undefined as T | undefined
  );
}
