import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Returns the week from a temporal
 * @param temporal Temporal
 * @returns Week
 */
export function toWeek(temporal: TemporalWithDate): number {
  return temporal.weekOfYear;
}
