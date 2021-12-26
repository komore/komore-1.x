import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Creates a function that adds milliseconds to a temporal
 * @param milliseconds Number of milliseconds to add
 * @returns Function that adds milliseconds to a temporal
 */
export function addMilliseconds(milliseconds: number): <T extends TemporalWithTime>(temporal: T) => T {
  return <T extends TemporalWithTime>(temporal: T) => temporal.add({ milliseconds }) as T;
}
