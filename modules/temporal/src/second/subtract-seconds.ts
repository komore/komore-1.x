import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Creates a function that subtracts seconds from a temporal with time
 * @param seconds Number of seconds to add
 * @returns Function that subtract seconds from a temporal with time
 */
export function subtractSeconds(seconds: number): <T extends TemporalWithTime>(temporal: T) => T {
  return <T extends TemporalWithTime>(temporal: T) => temporal.subtract({ seconds }) as T;
}
