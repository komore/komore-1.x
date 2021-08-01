import type { Temporal } from '@js-temporal/polyfill';
import { TemporalWithDate } from '../temporal-with-date';

/**
 * Tests whether a temporal with date occurs the year after another temporal with date
 * @param lhs Left-hand temporal with date
 * @param rhs Right-hand temporal with date
 * @returns true if `lhs` occurs the year after `rhs`
 */
export function isFollowingYear(
  lhs: TemporalWithDate | Temporal.PlainYearMonth,
  rhs: TemporalWithDate | Temporal.PlainYearMonth
): boolean {
  return lhs.year === rhs.year + 1;
}
