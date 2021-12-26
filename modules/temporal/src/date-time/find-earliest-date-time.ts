import { type TemporalWithDateTime } from '../temporal-with-date-time';
import { isEarlier } from './is-earlier';

/**
 * Finds the earliest temporal with date and time within a list
 * @param temporals List of temporals with date and time
 * @returns Earliest temporal, or `undefined` if the list is empty
 */
export function findEarliestDateTime<T extends TemporalWithDateTime>(temporals: ReadonlyArray<T>): T | undefined {
  return temporals.reduce(
    (prev, curr) => (prev === undefined || isEarlier(curr, prev) ? curr : prev),
    undefined as T | undefined
  );
}
