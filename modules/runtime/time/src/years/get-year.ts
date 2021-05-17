import type { TemporalWithDate } from '../temporal-with-date';

/**
 * Gets the year from a temporal
 * @param temporal Temporal
 * @returns Year
 */
export function getYear(temporal: TemporalWithDate): number {
  return temporal._.getFullYear();
}
