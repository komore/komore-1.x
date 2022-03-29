import { type Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Returns a function that tests whether a temporal occurs an earlier year than a reference temporal or year
 * @param referenceYear Reference year
 * @returns Function that tests whether a temporal occurs an earlier year than the reference temporal or year
 */
export function isEarlierYearThan(
  referenceTemporalOrYear: TemporalWithDate | Temporal.PlainYearMonth | number
): (temporal: TemporalWithDate | Temporal.PlainYearMonth) => boolean {
  const referenceYear =
    typeof referenceTemporalOrYear === 'number' ? referenceTemporalOrYear : referenceTemporalOrYear.year;
  return temporal => temporal.year < referenceYear;
}
