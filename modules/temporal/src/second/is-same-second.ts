import type { TemporalWithTime } from '../temporal-with-time';

/**
 * Tests wether two temporals with time occur at the same second
 * @param lhs Left-hand temporal
 * @param rhs Right-hand temporal
 * @returns true if `lhs` and `rhs` occur at the same second
 */
export function isSameSecond(lhs: TemporalWithTime, rhs: TemporalWithTime): boolean {
  return lhs.second === rhs.second;
}
