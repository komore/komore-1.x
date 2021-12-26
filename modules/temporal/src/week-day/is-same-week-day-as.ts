import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Returns a function that tests whether a temporal occurs on the same week day as a reference temporal
 * @param referenceTemporal Reference temporal
 * @returns Function that tests whether a temporal occurs on the same week day as the reference temporal
 */
export function isSameWeekDayAs(referenceTemporal: TemporalWithDate): (temporal: TemporalWithDate) => boolean {
  return temporal => referenceTemporal.dayOfWeek === temporal.dayOfWeek;
}
