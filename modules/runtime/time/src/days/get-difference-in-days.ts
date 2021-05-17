import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Gets the difference between two temporals in days
 * @param lhs Left-hand temporal
 * @param rhs Right-hand temporal
 * @returns Difference in minutes
 * @template T Temporal type (lhs)
 * @template U Temporal type (rhs)
 */
export function getDifferenceInDays<T extends TemporalWithDate, U extends TemporalWithDate>(lhs: T, rhs: U): number {
  const difference = lhs._.getTime() - rhs._.getTime();
  const differenceInDays = Math.floor(Math.abs(difference) / (60 * 60 * 24));
  return difference < 0 ? -differenceInDays : differenceInDays;
}
