import type { TemporalWithDate } from '../temporal-with-date';
import type { TemporalWithPartialDate } from '../temporal-with-partial-date';

/**
 * Tests whether two temporals occur during a same month, not taking the year into account
 * @param lhs Left-hand temporal
 * @param rhs Right-hand temporal
 * @returns true if the temporals occur during a same month
 */
export function isSameMonth(
  lhs: TemporalWithDate | TemporalWithPartialDate,
  rhs: TemporalWithDate | TemporalWithPartialDate
): boolean {
  return lhs.month === rhs.month;
}
