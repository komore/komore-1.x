import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Returns the day of the month from a temporal with date
 * @param temporal Temporal with date
 * @returns Day of the month
 */
export function dateToDay(temporal: TemporalWithDate): number {
  return temporal.day;
}
