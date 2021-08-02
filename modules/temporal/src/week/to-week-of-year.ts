import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Returns the week of the year from a temporal
 * @param temporal Temporal
 * @returns Week of the year
 */
export function toWeekOfYear(temporal: TemporalWithDate): number {
  return temporal.weekOfYear;
}
