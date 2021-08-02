import type { TemporalWithTime } from '../temporal-with-time';

/**
 * Creates a function that adds hours to a temporal
 * @param hours Number of hours to add
 * @returns Function that adds hours to a temporal
 */
export function addHours(hours: number): <T extends TemporalWithTime>(temporal: T) => T {
  return <T extends TemporalWithTime>(temporal: T) => temporal.add({ hours }) as T;
}
