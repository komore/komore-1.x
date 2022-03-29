import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Reducer that returns the temporal with the earliest date, ignoring time if present
 * @param prev Previous temporal
 * @param curr Current temporal
 * @returns Temporal with the earliest date
 */
export function datesToEarliestDate<T extends TemporalWithDate>(prev: T, curr: T): T {
  return prev.year <= curr.year && prev.month <= curr.month && prev.day <= curr.day ? prev : curr;
}
