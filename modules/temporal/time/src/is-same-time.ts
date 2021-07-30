import type { TemporalWithTime } from './temporal-with-time';

/**
 * Tests whether two temporal occur at the same time, ignoring any date component if present
 * @param lhs Left-hand temporal
 * @param rhs Right-hand temporal
 * @returns true if `lhs` and `rhs` occur at the same time
 */
export function isSameTime(lhs: TemporalWithTime, rhs: TemporalWithTime): boolean {
  const lhsPt = lhs._.toPlainTime();
  const rhsPt = rhs._.toPlainTime();
  return lhsPt.until(rhsPt).sign === 0;
}
