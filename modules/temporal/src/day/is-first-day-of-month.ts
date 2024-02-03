import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Tests whether a temporal occurs on the first day of the month
 *
 * @param temporal Temporal
 * @returns true if the temporal occurs on the first day of the month
 */
export function isFirstDayOfMonth(temporal: TemporalWithDate | Temporal.PlainMonthDay): boolean {
  return temporal.day === 1;
}
