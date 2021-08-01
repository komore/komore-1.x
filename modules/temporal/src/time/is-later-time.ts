import { asPlainTime } from '../as-plain-time';
import type { TemporalWithTime } from '../temporal-with-time';

/**
 * Tests whether a temporal with time occurs at a later time than another temporal with time
 * @param lhs Left-hand temporal with time
 * @param rhs Right-hand temporal with time
 * @returns true if `lhs` occurs at a later time than `rhs`
 */
export function isLaterTime(lhs: TemporalWithTime, rhs: TemporalWithTime): boolean {
  const lhsPlainTime = asPlainTime(lhs);
  const rhsPlainTime = asPlainTime(rhs);
  return lhsPlainTime.until(rhsPlainTime).sign < 0;
}
