import type { TemporalWithDate } from '../temporal-with-date';
import { findDateByDuration } from './find-date-by-comparison';

/**
 * Finds the temporal with the latest date
 * @param temporals List of temporals with date
 * @returns Temporal with the latest date, or `undefined` if the list is empty
 * @template T Temporal with date type
 */
export function findLatestDate<T extends TemporalWithDate>(temporals: ReadonlyArray<T>): T | undefined {
  return findDateByDuration(temporals, duration => duration.sign < 0);
}
