import type { Duration } from './duration';

/**
 * Gets a duration in seconds
 * @param duration Duration
 * @returns Duration in seconds
 */
export function getDurationInSeconds(duration: Duration): number {
  return duration._ / 1000;
}
