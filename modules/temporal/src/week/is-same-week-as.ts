import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Creates a function that tests whether a temporal occurs on the same week as another reference temporal
 * @param referenceTemporal Reference temporal
 * @returns Function that tests whether a temporal occurs on the same week as `referenceTemporal`
 */
export function isSameWeekAs(referenceTemporal: TemporalWithDate): (temporal: TemporalWithDate) => boolean {
  return temporal => temporal.year === referenceTemporal.year && temporal.weekOfYear === referenceTemporal.weekOfYear;
}
