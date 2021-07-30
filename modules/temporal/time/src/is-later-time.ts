import type { InstantWithTime } from './instant-with-time';

/**
 * Tests whether a time is later than another time
 * @param lhs Left-hand instant
 * @param rhs Right-hand instant
 * @returns true if `lhs` is later than `rhs`
 */
export function isLaterTime(lhs: InstantWithTime, rhs: InstantWithTime): boolean {
  const lhsPt = lhs._.toPlainTime();
  const rhsPt = rhs._.toPlainTime();
  return lhsPt.until(rhsPt).sign < 0;
}
