import type { TemporalWithTime } from '../temporal-with-time';

/**
 * Creates a function that subtracts nanoseconds from a temporal with time
 * @param nanoseconds Number of nanoseconds to subtract
 * @returns Function that subtracts nanoseconds from a temporal with time
 */
export function subtractNanoseconds(nanoseconds: number): <T extends TemporalWithTime>(temporal: T) => T {
  return <T extends TemporalWithTime>(temporal: T) => temporal.subtract({ nanoseconds }) as T;
}
