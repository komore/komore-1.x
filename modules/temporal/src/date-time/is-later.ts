import type { TemporalWithDateTime } from '../temporal-with-date-time';

/**
 * Tests whether a temporal with date and time occurs later than another temporal with date and time
 * @param lhs Left-hand temporal
 * @param rhs Right-hand temporal
 * @returns true if `lhs` occurs later than `rhs`
 */
export function isLater(lhs: TemporalWithDateTime, rhs: TemporalWithDateTime): boolean {
  return lhs.until(rhs).sign < 0;
}
