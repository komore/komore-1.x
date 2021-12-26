import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Creates a function that adds seconds to a temporal with time
 * @param seconds Number of seconds to add
 * @returns Function that adds seconds to a temporal with time
 */
export function addSeconds(seconds: number): <T extends TemporalWithTime>(temporal: T) => T {
  return <T extends TemporalWithTime>(temporal: T) => temporal.add({ seconds }) as T;
}
