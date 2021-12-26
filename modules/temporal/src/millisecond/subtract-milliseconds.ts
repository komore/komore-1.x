import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Creates a function that subtracts milliseconds from a temporal
 * @param milliseconds Number of milliseconds to subtract
 * @returns Function that subtracts milliseconds from a temporal
 */
export function subtractMilliseconds(milliseconds: number): <T extends TemporalWithTime>(temporal: T) => T {
  return <T extends TemporalWithTime>(temporal: T) => temporal.subtract({ milliseconds }) as T;
}
