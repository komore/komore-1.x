import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Tests whether a temporal with day occurs on the first day of the year
 * @param temporal Temporal
 * @returns true if the temporal occurs on the first day of the year
 */
export function isFirstDayOfYear(temporal: TemporalWithDate): boolean {
  return temporal.dayOfYear === 1;
}
