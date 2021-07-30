import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Tests whether two temporal occur the same week
 * @param lhs Left-hand temporal
 * @param rhs Right-hand temporal
 * @returns true if `lhs` and `rhs` occur during the same week
 */
export function isSameWeek(lhs: TemporalWithDate, rhs: TemporalWithDate): boolean {
  return lhs.year === rhs.year && lhs.weekOfYear === rhs.weekOfYear;
}
