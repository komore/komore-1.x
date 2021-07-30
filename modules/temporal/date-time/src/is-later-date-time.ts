import type { InstantWithDateTime } from './instant-with-date-time';

/**
 * Tests whether a date time is later than another date time
 * @param lhs Left-hand instant
 * @param rhs Right-hand instant
 * @returns true if `lhs` is later than `rhs`
 */
export function isLaterDateTime(lhs: InstantWithDateTime, rhs: InstantWithDateTime): boolean {
  return rhs._.getTime() < lhs._.getTime();
}
