import type { Temporal } from '../temporal';

/**
 * Gets the difference between two temporals in milliseconds
 * @param lhs Left-hand temporal
 * @param rhs Right-hand temporal
 * @returns Difference in milliseconds
 */
export function getDifferenceInMilliseconds(lhs: Temporal, rhs: Temporal): number {
  return lhs._.getTime() - rhs._.getTime();
}
