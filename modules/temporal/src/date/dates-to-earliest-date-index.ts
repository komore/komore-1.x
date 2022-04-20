import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Reducer that returns the earliest of two temporals, ignoring time if present
 *
 * ```ts
 * const earliestDateIndex = temporals.reduce(temporalsToEarliestDateIndex, -1);
 * ```
 *
 * @param prevIndex Previous temporal index
 * @param curr Current temporal
 * @param index Index
 * @param temporals List of temporals
 * @returns The index of the earliest temporal, ignoring time if present
 */
export function datesToEarliestDateIndex<T extends TemporalWithDate>(
  prevIndex: number,
  curr: T,
  index: number,
  temporals: ReadonlyArray<T>
): number {
  if (prevIndex === -1) {
    return index;
  }

  const prev = temporals[prevIndex];
  if (prev === undefined) {
    return index;
  }

  return prev.year <= curr.year && prev.month <= curr.month && prev.day <= curr.day ? prevIndex : index;
}
