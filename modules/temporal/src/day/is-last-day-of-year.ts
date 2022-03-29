import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Tests whether a temporal with day occurs on the last day of the year
 * @param temporal Temporal
 * @returns true if the temporal occurs on the last day of the year
 */
export function isLastDayOfYear(temporal: TemporalWithDate): boolean {
  return temporal.add({ days: 1 }).year !== temporal.year;
}
