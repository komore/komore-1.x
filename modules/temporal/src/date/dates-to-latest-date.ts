import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Reducer that returns the temporal with the latest date, ignoring time if present
 * @param prev Previous temporal
 * @param curr Current temporal
 * @returns Temporal with the latest date
 */
export function datesToLatestDate<T extends TemporalWithDate>(prev: T, curr: T): T {
  return prev.year >= curr.year && prev.month >= curr.month && prev.day >= curr.day ? prev : curr;
}
