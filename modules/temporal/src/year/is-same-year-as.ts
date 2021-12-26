import { type Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Creates a function that tests whether a temporal occurs during the same year as a reference temporal
 * @param referenceTemporal Reference temporal
 * @returns Function that tests whether a temporal occurs during the same year as the reference temporal
 */
export function isSameYearAs(
  referenceTemporal: TemporalWithDate | Temporal.PlainYearMonth
): (temporal: TemporalWithDate | Temporal.PlainYearMonth) => boolean {
  return temporal => temporal.year === referenceTemporal.year;
}
