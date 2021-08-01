import { Temporal } from '@js-temporal/polyfill';
import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Tests whether a temporal with date occurs this year
 * @param temporal Temporal with date
 * @returns true if the temporal occurs this year
 */
export function isThisYear(temporal: TemporalWithDate | Temporal.PlainYearMonth): boolean {
  const now = Temporal.now.plainDateISO();
  return temporal.year === now.year;
}
