import { findDateByDuration } from './find-date-by-comparison';
import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Finds the temporal with the earliest date
 * @param temporals List of temporals with date
 * @returns Temporal with the earliest date, or `undefined` if the list is empty
 * @template T Temporal with date type
 */
export function findEarliestDate<T extends TemporalWithDate>(temporals: ReadonlyArray<T>): T | undefined {
  return findDateByDuration(temporals, duration => duration.sign > 0);
}
