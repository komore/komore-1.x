import { asPlainTime } from '../as-plain-time';
import type { TemporalWithTime } from '../temporal-with-time';

/**
 * Tests whether two temporal occur at the same time, ignoring any date component if present
 * @param lhs Left-hand temporal
 * @param rhs Right-hand temporal
 * @returns true if `lhs` and `rhs` occur at the same time
 */
export function isSameTime(lhs: TemporalWithTime, rhs: TemporalWithTime): boolean {
  const lhsPlainTime = asPlainTime(lhs);
  const rhsPlainTime = asPlainTime(rhs);
  return lhsPlainTime.until(rhsPlainTime).sign === 0;
}
