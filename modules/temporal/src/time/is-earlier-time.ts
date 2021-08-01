import { asPlainTime } from '../as-plain-time';
import type { TemporalWithTime } from '../temporal-with-time';

/**
 * Tests whether a temporal with time occurs at an earlier time than another temporal with time
 * @param lhs Left-hand temporal with time
 * @param rhs Right-hand temporal with time
 * @returns true if `lhs` occurs at an earlier time than `rhs`
 */
export function isEarlierTime(lhs: TemporalWithTime, rhs: TemporalWithTime): boolean {
  const lhsPlainTime = asPlainTime(lhs);
  const rhsPlainTime = asPlainTime(rhs);
  return lhsPlainTime.until(rhsPlainTime).sign > 0;
}
