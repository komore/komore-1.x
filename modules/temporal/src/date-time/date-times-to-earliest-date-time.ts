import { type TemporalWithDateTime } from '../temporal-with-date-time';

/**
 * Reduces to the earliest temporal with date and time
 * @param prev Previous temporal
 * @param curr Current temporal
 * @returns Earliest temporal
 */
export function dateTimesToEarlierDateTimeIndex<T extends TemporalWithDateTime>(prev: T, _curr: T): T {
  // TODO: implement
  return prev;
}
