import { type Temporal } from '@js-temporal/polyfill';
import { TemporalWithDate } from '../temporal-with-date';

/**
 * Creates a function that tests whether a temporal occurs the year before a specific year
 * @param referenceYear Reference year
 * @returns Function that tests whether a temporal occurs the year before the specific year
 */
export function isYearBefore(referenceYear: number): (temporal: TemporalWithDate | Temporal.PlainYearMonth) => boolean;

/**
 * Creates a function that tests whether a temporal occurs the year before a reference temporal with date
 * @param referenceTemporal Reference temporal with date
 * @returns Function that tests whether a temporal occurs the year before the reference temporal with date
 */
export function isYearBefore(
  referenceTemporal: TemporalWithDate | Temporal.PlainYearMonth
): (temporal: TemporalWithDate | Temporal.PlainYearMonth) => boolean;

export function isYearBefore(
  referenceTemporalOrYear: TemporalWithDate | Temporal.PlainYearMonth | number
): (temporal: TemporalWithDate | Temporal.PlainYearMonth) => boolean {
  const referenceYear =
    typeof referenceTemporalOrYear === 'number' ? referenceTemporalOrYear : referenceTemporalOrYear.year;
  return temporal => temporal.year === referenceYear - 1;
}
