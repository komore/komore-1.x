import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Returns the day of the year from a temporal with date
 * @param temporal Temporal with date
 * @returns Day of the year
 */
export function dateToDayOfYear(temporal: TemporalWithDate): number {
  return temporal.dayOfYear;
}
