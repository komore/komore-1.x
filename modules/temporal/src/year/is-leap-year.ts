import type { Temporal } from '@js-temporal/polyfill';
import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Tests whether the temporal with date occurs during a leap year
 * @param temporal Temporal with date
 * @returns true if the temporal occurs during a leap year
 */
export function isLeapYear(temporal: TemporalWithDate | Temporal.PlainYearMonth): boolean {
  return temporal.inLeapYear;
}
