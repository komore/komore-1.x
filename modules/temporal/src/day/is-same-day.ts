import { type Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Tests whether two temporals occur on the same day of the month
 * @param lhs Left-hand temporal
 * @param rhs Right-hand temporal
 * @returns true if `lhs` and `rhs` occur on the same day of the month
 */
export function isSameDay(
  lhs: TemporalWithDate | Temporal.PlainMonthDay,
  rhs: TemporalWithDate | Temporal.PlainMonthDay
): boolean {
  return lhs.day === rhs.day;
}
