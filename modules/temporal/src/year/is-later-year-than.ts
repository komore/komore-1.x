import { type Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Returns a function that tests whether a temporal occurs a later year than a reference year
 * @param referenceYear Reference year
 * @returns Function that tests whether a temporal occurs a later year than the reference year
 */
export function isLaterYearThan(
  referenceYear: number
): (temporal: TemporalWithDate | Temporal.PlainYearMonth) => boolean;

/**
 * Returns a function that tests whether a temporal occurs a later year than a reference temporal
 * @param referenceTemporal Reference temporal
 * @returns Function that tests whether a temporal occurs a later year than the reference temporal
 */
export function isLaterYearThan(
  referenceTemporal: TemporalWithDate | Temporal.PlainYearMonth
): (temporal: TemporalWithDate | Temporal.PlainYearMonth) => boolean;

export function isLaterYearThan(
  referenceTemporalOrYear: TemporalWithDate | Temporal.PlainYearMonth | number
): (temporal: TemporalWithDate | Temporal.PlainYearMonth) => boolean {
  const referenceYear =
    typeof referenceTemporalOrYear === 'number' ? referenceTemporalOrYear : referenceTemporalOrYear.year;
  return temporal => temporal.year > referenceYear;
}
