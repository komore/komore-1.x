import { type Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Returns a function that tests whether a temporal occurs a later year than a reference temporal or year
 * @param referenceTemporalOrYear Reference temporal or year
 * @returns Function that tests whether a temporal occurs a later year than the reference temporal or year
 */
export function isLaterYearThan(
  referenceTemporalOrYear: TemporalWithDate | Temporal.PlainYearMonth | number
): (temporal: TemporalWithDate | Temporal.PlainYearMonth) => boolean {
  const referenceYear =
    typeof referenceTemporalOrYear === 'number' ? referenceTemporalOrYear : referenceTemporalOrYear.year;
  return temporal => temporal.year > referenceYear;
}
