import type { TemporalWithTime } from '../temporal-with-time';

/**
 * Creates a function that adds microseconds to a temporal
 * @param hours Number of microseconds to add
 * @returns Function that adds microseconds to a temporal
 */
export function addMicroseconds(microseconds: number): <T extends TemporalWithTime>(temporal: T) => T {
  return <T extends TemporalWithTime>(temporal: T) => temporal.add({ microseconds }) as T;
}
