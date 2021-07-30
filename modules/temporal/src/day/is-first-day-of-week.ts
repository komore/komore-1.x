import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Tests whether a temporal with date occurs on the first day of the week
 * @param temporal Temporal with date
 * @returns true if the temporal with date occurs on the first day of the week
 */
export function isFirstDayOfWeek(temporal: TemporalWithDate): boolean {
  return temporal.dayOfWeek === 1;
}
