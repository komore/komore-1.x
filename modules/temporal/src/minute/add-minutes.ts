import { type TemporalWithTime } from '../temporal-with-time';

/**
 * Creates a function that adds minutes to a temporal
 * @param minutes Number of minutes to add
 * @returns Function that adds minutes to a temporal
 */
export function addMinutes(minutes: number): <T extends TemporalWithTime>(temporal: T) => T {
  return <T extends TemporalWithTime>(temporal: T) => temporal.add({ minutes }) as T;
}
