import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Creates a function that subtracts hours from a temporal
 * @param hours Number of hours to subtract
 * @returns Function that subtracts hours from a temporal
 */
export function subtractHours(hours: number): <T extends TemporalWithTime>(temporal: T) => T {
  return <T extends TemporalWithTime>(temporal: T) => temporal.subtract({ hours }) as T;
}
