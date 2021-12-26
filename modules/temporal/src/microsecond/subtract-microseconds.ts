import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Creates a function that subtracts microseconds from a temporal
 * @param hours Number of microseconds to subtract
 * @returns Function that subtracts microseconds from a temporal
 */
export function subtractMicroseconds(microseconds: number): <T extends TemporalWithTime>(temporal: T) => T {
  return <T extends TemporalWithTime>(temporal: T) => temporal.subtract({ microseconds }) as T;
}
