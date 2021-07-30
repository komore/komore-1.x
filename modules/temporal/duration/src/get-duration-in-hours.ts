import type { Duration } from './duration';

/**
 * Gets a duration in hours
 * @param duration Duration
 * @returns Duration in hours
 */
export function getDurationInHours(duration: Duration): number {
  return duration._ / (1000 * 60 * 60);
}
