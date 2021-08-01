import type { TemporalWithDateTime } from '../temporal-with-date-time';

/**
 * Tests whether a temporal with date and time occurs earlier than another temporal with date and time
 * @param lhs Left-hand temporal
 * @param rhs Right-hand temporal
 * @returns true if `lhs` occurs earlier than `rhs`
 */
export function isEarlier(lhs: TemporalWithDateTime, rhs: TemporalWithDateTime): boolean {
  return lhs.until(rhs).sign > 0;
}
