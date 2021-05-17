import type { Temporal } from '../temporal';

/**
 * Gets the difference between two temporals in minutes
 * @param lhs Left-hand temporal
 * @param rhs Right-hand temporal
 * @returns Difference in minutes
 * @template T Temporal type (lhs)
 * @template U Temporal type (rhs)
 */
export function getDifferenceInMinutes<T extends Temporal, U extends Temporal>(lhs: T, rhs: U): number {
  const difference = lhs._.getTime() - rhs._.getTime();
  const differenceInMinutes = Math.floor(Math.abs(difference) / 60);
  return difference < 0 ? -differenceInMinutes : differenceInMinutes;
}
