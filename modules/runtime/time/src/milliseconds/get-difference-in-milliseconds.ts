import type { Temporal } from '../temporal';

/**
 * Gets the difference between two temporals in milliseconds
 * @param lhs Left-hand temporal
 * @param rhs Right-hand temporal
 * @returns Difference in milliseconds
 * @template T Temporal type (lhs)
 * @template U Temporal type (rhs)
 */
export function getDifferenceInMilliseconds<T extends Temporal, U extends Temporal>(lhs: T, rhs: U): number {
  return lhs._.getTime() - rhs._.getTime();
}
