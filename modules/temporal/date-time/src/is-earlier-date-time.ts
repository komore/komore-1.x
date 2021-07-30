import type { TemporalWithDateTime } from './temporal-with-date-time';

/**
 * Tests whether a date time is earlier than another date time
 * @param lhs Left-hand temporal
 * @param rhs Right-hand temporal
 * @returns true if `lhs` is earlier than `rhs`
 */
export function isEarlierDateTime(lhs: TemporalWithDateTime, rhs: TemporalWithDateTime): boolean {
  return lhs._.getTime() < rhs._.getTime();
}
