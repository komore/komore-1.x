import type { InstantWithTime } from '../instant-with-time';

/**
 * Tests whether two instants occur at the same hour
 * @param lhs Left-hand instant
 * @param rhs Right-hand instant
 * @returns true if both instants occur at the same hour
 */
export function isSameHour(lhs: InstantWithTime, rhs: InstantWithTime): boolean {
  return lhs._.hour === rhs._.hour;
}
