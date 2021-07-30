import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Tests whether two temporals occur on the same week day
 * @param lhs Left-hand temporal
 * @param rhs Right-hand temporal
 * @returns true if `lhs` occurs on the same week day as `rhs`
 */
export function isSameWeekDay(lhs: TemporalWithDate, rhs: TemporalWithDate): boolean {
  return lhs.dayOfWeek === rhs.dayOfWeek;
}
