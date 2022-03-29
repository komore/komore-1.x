import { type TemporalWithDateTime } from '../temporal-with-date-time';

/**
 * Reduces to the index for the earliest temporal with date and time
 * @param prevIndex Previous temporal index
 * @param curr Current temporal
 * @param index Current temporal index
 * @param temporals List of temporals
 * @returns Index for the earliest temporal
 */
export function dateTimesToEarlierDateTimeIndex<T extends TemporalWithDateTime>(prevIndex: number, _curr: T, _index: number, _temporals: ReadonlyArray<T>): number {
  // TODO: implement
  return prevIndex;
}
