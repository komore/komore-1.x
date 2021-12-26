import { findDateIndexByComparison } from './find-date-index-by-comparison';
import { type TemporalWithDate } from './temporal-with-date';

/**
 * Finds the index of the temporal with the earliest date
 * @param temporals List of temporals with date
 * @returns Index of the temporal with the earliest date, or `-1` if the list is empty
 */
export function findEarliestDateIndex(temporals: ReadonlyArray<TemporalWithDate>): number {
  return findDateIndexByComparison(temporals, duration => duration.sign > 0);
}
