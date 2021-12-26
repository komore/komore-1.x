import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Creates a function that subtracts minutes from a temporal
 * @param minutes Number of minutes to subtract
 * @returns Function that subtracts minutes from a temporal
 */
export function subtractMinutes(minutes: number): <T extends TemporalWithTime>(temporal: T) => T {
  return <T extends TemporalWithTime>(temporal: T) => temporal.subtract({ minutes }) as T;
}
