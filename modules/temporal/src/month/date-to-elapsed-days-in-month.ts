import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Returns the number of elapsed days in a given month
 *
 * @param temporal Temporal
 * @returns Number of elapsed days
 */
export function dateToElapsedDaysInMonth(temporal: TemporalWithDate | Temporal.PlainMonthDay): number {
  return temporal.day - 1;
}
