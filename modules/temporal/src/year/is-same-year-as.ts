import { type Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Creates a function that tests whether a temporal occurs during the same year as a reference temporal or year
 * @param referenceTemporal Reference temporal
 * @returns Function that tests whether a temporal occurs during the same year as the reference temporal or year
 */
export function isSameYearAs(
  referenceTemporalOrYear: TemporalWithDate | Temporal.PlainYearMonth | number
): (temporal: TemporalWithDate | Temporal.PlainYearMonth) => boolean {
  const referenceYear =
    typeof referenceTemporalOrYear === 'number' ? referenceTemporalOrYear : referenceTemporalOrYear.year;
  return temporal => temporal.year === referenceYear;
}
