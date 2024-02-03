import { type TemporalWithDate } from '../temporal-with-date';

/**
 * Returns the century from a temporal with a date
 *
 * @param temporal Temporal
 * @returns Century
 */
export function dateToCentury(temporal: TemporalWithDate | Temporal.PlainYearMonth): number {
  return Math.ceil(temporal.year / 100);
}
