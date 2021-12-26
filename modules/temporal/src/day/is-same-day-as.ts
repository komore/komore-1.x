import { type Temporal } from '@js-temporal/polyfill';
import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Creates a function that tests whether a temporal occurs on the same day of the month as a reference temporal
 * @param referenceTemporal Reference temporal
 * @returns Function that tests whether a temporal occurs on the same day of the month as the reference temporal
 */
export function isSameDayAs(
  referenceTemporal: TemporalWithDate | Temporal.PlainMonthDay
): (temporal: TemporalWithDate | Temporal.PlainMonthDay) => boolean {
  return temporal => temporal.day === referenceTemporal.day;
}
