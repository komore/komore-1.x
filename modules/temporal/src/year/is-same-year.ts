import type { Temporal } from '@js-temporal/polyfill';
import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Tests whether two temporals occur during the same year
 * @param lhs Left-hand temporal
 * @param rhs Right-hand temporal
 * @returns true if both temporals occur during the same year
 */
export function isSameYear(
  lhs: TemporalWithDate | Temporal.PlainYearMonth,
  rhs: TemporalWithDate | Temporal.PlainYearMonth
): boolean {
  return lhs.year === rhs.year;
}
