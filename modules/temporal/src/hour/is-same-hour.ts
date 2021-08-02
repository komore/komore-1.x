import type { TemporalWithTime } from '../temporal-with-time';

/**
 * Tests whether two temporals with time occur at the same hour
 * @param lhs Left-hand temporal with time
 * @param rhs Right-hand temporal with time
 * @returns true if both temporals occur at the same hour
 */
export function isSameHour(lhs: TemporalWithTime, rhs: TemporalWithTime): boolean {
  return lhs.hour === rhs.hour;
}
