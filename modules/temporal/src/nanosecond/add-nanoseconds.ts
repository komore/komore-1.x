import type { TemporalWithTime } from '../temporal-with-time';

/**
 * Creates a function that adds nanoseconds to a temporal with time
 * @param nanoseconds Number of nanoseconds to add
 * @returns Function that adds nanoseconds to a temporal with time
 */
export function addNanoseconds(nanoseconds: number): <T extends TemporalWithTime>(temporal: T) => T {
  return <T extends TemporalWithTime>(temporal: T) => temporal.add({ nanoseconds }) as T;
}
