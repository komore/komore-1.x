import type { Duration } from './duration';

/**
 * Gets a duration in minutes
 * @param duration Duration
 * @returns Duration in minutes
 */
export function getDurationInMinutes(duration: Duration): number {
  return duration._ / (1000 * 60);
}
