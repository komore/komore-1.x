import type { InstantWithTime } from './instant-with-time';

/**
 * Tests whether a time is earlier than another time
 * @param lhs Left-hand instant
 * @param rhs Right-hand instant
 * @returns true if `lhs` is earlier than `rhs`
 */
export function isEarlierTime(lhs: InstantWithTime, rhs: InstantWithTime): boolean {
  const lhsPt = lhs._.toPlainTime();
  const rhsPt = rhs._.toPlainTime();
  return lhsPt.until(rhsPt).sign > 0;
}
